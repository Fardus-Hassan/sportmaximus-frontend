import React from 'react';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  full: 'max-w-full',
};

export default function Container({
  children,
  size = 'xl',
  className = '',
}: ContainerProps) {
  return (
    <div className={`mx-auto max-w-[1440px] w-[95%] ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
