import React from 'react';
import { cn } from '@/lib/utils.js';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ServiceCard({ title, description, icon: Icon, to = "/pricing" }) {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg hover:border-slate-500/20">
      <div>
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      </div>

      <button
        onClick={() => navigate(to)}
        className="w-full py-3 border border-primary/20 text-primary bg-primary/5 rounded-full hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all font-semibold text-sm flex items-center justify-center gap-2 group/btn"
      >
        View Pricing & Details
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

export default ServiceCard;
