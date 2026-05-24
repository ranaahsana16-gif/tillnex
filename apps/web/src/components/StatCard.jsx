import React from 'react';

export function StatCard({ title, value, suffix }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground mb-3">{title}</p>
      <p className="text-4xl font-bold text-foreground">
        {value}
        {suffix && <span className="text-2xl font-semibold text-primary">{suffix}</span>}
      </p>
    </div>
  );
}
