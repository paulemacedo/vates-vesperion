import { motion, AnimatePresence } from 'framer-motion'

const Notification = ({ 
  type = 'hint', // 'hint' | 'success' 
  show = false, 
  onClose,
  children 
}) => {
  const getNotificationClass = () => {
    switch (type) {
      case 'success':
        return 'notification-success'
      case 'hint':
      default:
        return 'notification-hint'
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="notification-container"
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.8 }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          <div className={`notification ${getNotificationClass()}`}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification
