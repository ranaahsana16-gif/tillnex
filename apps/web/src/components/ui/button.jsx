import React from 'react';
import { cn } from '@/lib/utils.js';

const buttonVariants = {
  default: 'inline-flex items-center justify-center rounded-full border border-transparent bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50',
  outline: 'inline-flex items-center justify-center rounded-full border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
};

const buttonSizes = {
  default: 'h-11 px-4 text-sm',
  sm: 'h-9 px-3 text-sm',
  lg: 'h-14 px-6 text-base',
};

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => (
  <button
    ref={ref}
    className={cn(buttonVariants[variant] ?? buttonVariants.default, buttonSizes[size] ?? buttonSizes.default, className)}
    {...props}
  />
));

export { Button };
