// components/ui/button.tsx
import React from 'react';

export const Button = ({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold ${className}`}
    {...props}
  >
    {children}
  </button>
);
