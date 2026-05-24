import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils.js';

const SelectContext = createContext(null);

const Select = React.forwardRef(({ children, className, name, required, defaultValue = '', value: valueProp, onValueChange, ...props }, ref) => {
  const [value, setValue] = useState(valueProp ?? defaultValue);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (valueProp !== undefined) {
      setValue(valueProp);
    }
  }, [valueProp]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <SelectContext.Provider
      value={{
        value,
        placeholder: 'Select an option',
        setValue: handleValueChange,
        name,
        required,
        open,
        setOpen,
      }}
    >
      <div ref={ref} className={cn('relative', className)} {...props}>
        <input type="hidden" name={name} value={value} required={required} />
        <div ref={wrapperRef}>{children}</div>
      </div>
    </SelectContext.Provider>
  );
});

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const ctx = useContext(SelectContext);

  return (
    <button
      type="button"
      ref={ref}
      className={cn(
        'w-full flex items-center justify-between rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm hover:border-primary/70',
        className
      )}
      onClick={() => ctx?.setOpen(!ctx.open)}
      {...props}
    >
      {children}
      <span className="ml-3 text-muted-foreground">▼</span>
    </button>
  );
});

const SelectValue = React.forwardRef(({ placeholder, className, ...props }, ref) => {
  const ctx = useContext(SelectContext);
  return (
    <span ref={ref} className={cn('text-sm text-foreground', className)} {...props}>
      {ctx?.value || placeholder || ctx?.placeholder}
    </span>
  );
});

const SelectContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const ctx = useContext(SelectContext);
  if (!ctx?.open) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        'absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-card shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

const SelectItem = React.forwardRef(({ value, className, children, ...props }, ref) => {
  const ctx = useContext(SelectContext);

  return (
    <button
      type="button"
      ref={ref}
      className={cn(
        'w-full px-4 py-3 text-left text-sm text-foreground hover:bg-primary/5',
        className
      )}
      onClick={() => {
        ctx?.setValue(value);
        ctx?.setOpen(false);
      }}
      {...props}
    >
      {children}
    </button>
  );
});

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
