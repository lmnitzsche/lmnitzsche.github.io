'use client';

interface TechStackItemProps {
  name: string;
  icon: string;
}

export function TechStackItem({ name, icon }: TechStackItemProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        padding: 'var(--space-lg)',
        background: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        transition: 'all 0.2s',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <img
        src={icon}
        alt={name}
        style={{
          width: '40px',
          height: '40px',
          objectFit: 'contain'
        }}
      />
      <span style={{
        fontSize: '0.8125rem',
        fontWeight: 500,
        color: 'var(--text-secondary)',
        textAlign: 'center',
        textTransform: 'capitalize'
      }}>
        {name}
      </span>
    </div>
  );
}
