import { motion } from 'framer-motion';

const MotionButton = motion.button;

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`btn btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {children}
    </MotionButton>
  );
};

export default Button;
