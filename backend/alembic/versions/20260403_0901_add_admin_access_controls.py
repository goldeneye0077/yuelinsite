"""placeholder revision for admin access controls

Revision ID: 20260403_0901
Revises: 20260403_0801
Create Date: 2026-04-03 20:25:00
"""

from collections.abc import Sequence


# revision identifiers, used by Alembic.
revision: str = '20260403_0901'
down_revision: str | None = '20260403_0801'
branch_labels: Sequence[str] | None = None
depends_on: Sequence[str] | None = None


def upgrade() -> None:
    return None


def downgrade() -> None:
    return None
