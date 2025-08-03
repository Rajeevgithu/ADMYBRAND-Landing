'use client';

import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'elevated';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  delay?: number;
  whileHover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  className,
  delay = 0,
  whileHover = true,
  onClick
}: CardProps) {
  const baseClasses = "rounded-2xl border transition-all duration-300";
  
  const variants = {
    default: "bg-white/5 border-white/10 hover:border-white/20",
    glass: "bg-glass border-white/10 backdrop-blur-sm hover:border-white/20",
    gradient: "bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 hover:border-primary/50",
    elevated: "bg-white/10 border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15"
  };

  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10"
  };

  return (
    <motion.div
      className={cn(
        baseClasses,
        variants[variant],
        paddings[padding],
        onClick && "cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={whileHover ? { y: -5, scale: 1.02 } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
} 