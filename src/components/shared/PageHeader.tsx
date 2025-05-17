import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode; // Expect a Lucide icon component instance e.g. <HomeIcon />
  actions?: React.ReactNode; // Optional actions like buttons
}

export function PageHeader({ title, description, icon, actions }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && <span className="text-primary">{React.cloneElement(icon as React.ReactElement, { className: "h-7 w-7" })}</span>}
          <h1 className="text-2xl font-semibold md:text-3xl text-foreground">
            {title}
          </h1>
        </div>
        {actions && <div>{actions}</div>}
      </div>
      {description && (
        <p className="mt-2 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
