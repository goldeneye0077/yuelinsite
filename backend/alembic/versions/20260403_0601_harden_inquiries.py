"""harden inquiries for production intake

Revision ID: 20260403_0601
Revises: 20260331_0501
Create Date: 2026-04-03 16:35:00
"""

from collections.abc import Sequence

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '20260403_0601'
down_revision: str | None = '20260331_0501'
branch_labels: Sequence[str] | None = None
depends_on: Sequence[str] | None = None


def upgrade() -> None:
    op.add_column(
        'inquiries',
        sa.Column(
            'consent_accepted',
            sa.Boolean(),
            nullable=False,
            server_default=sa.true(),
        ),
    )
    op.add_column(
        'inquiries',
        sa.Column('status', sa.String(length=24), nullable=False, server_default='new'),
    )
    op.add_column(
        'inquiries',
        sa.Column('request_id', sa.String(length=64), nullable=True),
    )
    op.add_column(
        'inquiries',
        sa.Column('client_ip', sa.String(length=64), nullable=True),
    )
    op.add_column(
        'inquiries',
        sa.Column('user_agent', sa.String(length=512), nullable=True),
    )
    op.add_column(
        'inquiries',
        sa.Column('referer', sa.String(length=512), nullable=True),
    )
    op.create_index(op.f('ix_inquiries_status'), 'inquiries', ['status'], unique=False)
    op.create_index(op.f('ix_inquiries_request_id'), 'inquiries', ['request_id'], unique=False)
    op.create_index(op.f('ix_inquiries_client_ip'), 'inquiries', ['client_ip'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_inquiries_client_ip'), table_name='inquiries')
    op.drop_index(op.f('ix_inquiries_request_id'), table_name='inquiries')
    op.drop_index(op.f('ix_inquiries_status'), table_name='inquiries')
    op.drop_column('inquiries', 'referer')
    op.drop_column('inquiries', 'user_agent')
    op.drop_column('inquiries', 'client_ip')
    op.drop_column('inquiries', 'request_id')
    op.drop_column('inquiries', 'status')
    op.drop_column('inquiries', 'consent_accepted')
