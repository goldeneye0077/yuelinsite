"""add source context to inquiries

Revision ID: 20260403_0801
Revises: 20260403_0601
Create Date: 2026-04-03 19:55:00
"""

from collections.abc import Sequence

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '20260403_0801'
down_revision: str | None = '20260403_0601'
branch_labels: Sequence[str] | None = None
depends_on: Sequence[str] | None = None


def upgrade() -> None:
    op.add_column(
        'inquiries',
        sa.Column('source_context', sa.String(length=80), nullable=True),
    )
    op.create_index(
        op.f('ix_inquiries_source_context'),
        'inquiries',
        ['source_context'],
        unique=False,
    )


def downgrade() -> None:
    op.drop_index(op.f('ix_inquiries_source_context'), table_name='inquiries')
    op.drop_column('inquiries', 'source_context')
