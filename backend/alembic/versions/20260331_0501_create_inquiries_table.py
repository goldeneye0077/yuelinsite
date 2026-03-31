"""create inquiries table

Revision ID: 20260331_0501
Revises:
Create Date: 2026-03-31 14:56:00
"""

from collections.abc import Sequence

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '20260331_0501'
down_revision: str | None = None
branch_labels: Sequence[str] | None = None
depends_on: Sequence[str] | None = None


def upgrade() -> None:
    op.create_table(
        'inquiries',
        sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('company_name', sa.String(length=160), nullable=False),
        sa.Column('contact_name', sa.String(length=160), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('phone', sa.String(length=64), nullable=False),
        sa.Column('interest_category', sa.String(length=100), nullable=False),
        sa.Column('message', sa.Text(), nullable=False),
        sa.Column('locale', sa.String(length=2), nullable=False),
        sa.Column('source_page', sa.String(length=255), nullable=False),
        sa.Column(
            'created_at',
            sa.DateTime(timezone=True),
            server_default=sa.text('CURRENT_TIMESTAMP'),
            nullable=False,
        ),
        sa.PrimaryKeyConstraint('id'),
    )
    op.create_index(op.f('ix_inquiries_locale'), 'inquiries', ['locale'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_inquiries_locale'), table_name='inquiries')
    op.drop_table('inquiries')
