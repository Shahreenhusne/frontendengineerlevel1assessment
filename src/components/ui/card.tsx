// components/ui/card.tsx
import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-xl border p-4 shadow-md bg-white ${className}`}>{children}</div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-2">{children}</div>
);
