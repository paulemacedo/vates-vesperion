import { motion } from 'framer-motion';

const MotionButton = motion.button;
const MotionAnchor = motion.a;

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  as = 'button',
  className = '',
  ...props
}) => {
  const Component = as === 'a' ? MotionAnchor : MotionButton;
  return (
    <Component
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`btn btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
