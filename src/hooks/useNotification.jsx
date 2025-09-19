import { createContext, useContext, useState } from 'react'

const NotificationContext = createContext()

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({ show: false, type: 'hint', content: null })

  const showNotification = (type, content) => {
    setNotification({ show: true, type, content })
    setTimeout(() => setNotification({ show: false, type, content: null }), 3000)
  }

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      {/* Renderiza o Notification global */}
      <Notification
        type={notification.type}
        show={notification.show}
      >
        {notification.content}
      </Notification>
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  return useContext(NotificationContext)
}

// Importe seu Notification normalmente
import Notification from '../components/common/Notification'