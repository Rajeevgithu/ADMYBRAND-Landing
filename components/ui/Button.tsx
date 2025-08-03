'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";
  
  const getButtonStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
          color: 'white',
          boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
        };
      case 'secondary':
        return {
          background: 'linear-gradient(135deg, #38BDF8 0%, #6366F1 100%)',
          color: 'white',
          boxShadow: '0 4px 15px rgba(56, 189, 248, 0.3)'
        };
      case 'accent':
        return {
          background: 'linear-gradient(135deg, #EC4899 0%, #38BDF8 100%)',
          color: 'white',
          boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)'
        };
      case 'outline':
        return {
          background: 'transparent',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        };
      case 'ghost':
        return {
          background: 'transparent',
          color: '#9CA3AF'
        };
      case 'destructive':
        return {
          background: '#DC2626',
          color: 'white'
        };
      default:
        return {
          background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
          color: 'white'
        };
    }
  };

  const sizes = {
    sm: "px-3 py-2 text-sm gap-2",
    md: "px-4 py-3 text-sm gap-2",
    lg: "px-6 py-4 text-base gap-3",
    xl: "px-8 py-5 text-lg gap-3"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseClasses,
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      style={getButtonStyles(variant)}
      whileHover={{ 
        scale: disabled || loading ? 1 : 1.02,
        boxShadow: variant === 'primary' ? '0 8px 25px rgba(99, 102, 241, 0.4)' :
                   variant === 'secondary' ? '0 8px 25px rgba(56, 189, 248, 0.4)' :
                   variant === 'accent' ? '0 8px 25px rgba(236, 72, 153, 0.4)' : undefined
      }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
    >
      {loading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className={cn("border-2 border-current border-t-transparent rounded-full", iconSizes[size])}
          />
          Loading...
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <Icon className={iconSizes[size]} />
          )}
          {children}
          {Icon && iconPosition === 'right' && (
            <Icon className={iconSizes[size]} />
          )}
        </>
      )}
    </motion.button>
  );
} 