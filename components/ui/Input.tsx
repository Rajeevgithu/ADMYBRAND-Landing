'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

export default function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  success = false,
  disabled = false,
  required = false,
  icon: Icon,
  iconPosition = 'left',
  size = 'md',
  fullWidth = false,
  className,
  id,
  name
}: InputProps) {
  const baseClasses = "w-full rounded-xl bg-glass border backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300";
  
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-6 py-4 text-base"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const states = {
    default: "border-white/10 focus:border-primary/50 focus:ring-primary/20",
    error: "border-red-500 focus:border-red-400 focus:ring-red-500/20",
    success: "border-green-500 focus:border-green-400 focus:ring-green-500/20"
  };

  const getStateClass = () => {
    if (error) return states.error;
    if (success) return states.success;
    return states.default;
  };

  return (
    <div className={cn("space-y-2", fullWidth && "w-full", className)}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-300">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon className={iconSizes[size]} />
          </div>
        )}
        
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={cn(
            baseClasses,
            sizes[size],
            getStateClass(),
            Icon && iconPosition === 'left' && "pl-12",
            Icon && iconPosition === 'right' && "pr-12",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        />
        
        {Icon && iconPosition === 'right' && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon className={iconSizes[size]} />
          </div>
        )}
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
} 