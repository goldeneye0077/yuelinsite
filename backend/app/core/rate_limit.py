from collections import defaultdict, deque
from functools import lru_cache
from math import ceil
from threading import Lock
from time import monotonic
from typing import Deque

from app.core.config import get_settings


class SlidingWindowRateLimiter:
    def __init__(self, *, max_requests: int, window_seconds: int):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self._buckets: dict[str, Deque[float]] = defaultdict(deque)
        self._lock = Lock()

    def check(self, key: str) -> tuple[bool, int]:
        now = monotonic()
        cutoff = now - self.window_seconds

        with self._lock:
            bucket = self._buckets[key]

            while bucket and bucket[0] <= cutoff:
                bucket.popleft()

            if len(bucket) >= self.max_requests:
                retry_after = max(1, ceil(self.window_seconds - (now - bucket[0])))
                return False, retry_after

            bucket.append(now)
            return True, 0

    def reset(self) -> None:
        with self._lock:
            self._buckets.clear()


class InquiryRateLimiter(SlidingWindowRateLimiter):
    pass


class AdminLoginRateLimiter(SlidingWindowRateLimiter):
    pass


@lru_cache
def get_inquiry_rate_limiter() -> InquiryRateLimiter:
    settings = get_settings()
    return InquiryRateLimiter(
        max_requests=settings.inquiry_rate_limit_max_requests,
        window_seconds=settings.inquiry_rate_limit_window_seconds,
    )


@lru_cache
def get_admin_login_rate_limiter() -> AdminLoginRateLimiter:
    settings = get_settings()
    return AdminLoginRateLimiter(
        max_requests=settings.admin_login_rate_limit_max_requests,
        window_seconds=settings.admin_login_rate_limit_window_seconds,
    )
