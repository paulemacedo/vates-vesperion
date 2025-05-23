import { motion } from 'framer-motion'
// ...existing code...

const MotionButton = motion.button

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseClasses = "inline-block rounded-full font-montserrat font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer";
  
  const variants = {
    default: "bg-transparent text-gold border border-gold hover:bg-gold-gradient hover:text-midnight hover:border-transparent",
    primary: "bg-gold-gradient text-midnight border-none hover:opacity-90 hover:shadow-lg hover:shadow-gold/50",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  
  return (
    <MotionButton 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </MotionButton>
  );
};

export default Button;