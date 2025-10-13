const Scrollbar = ({ children, className = '', style = {} }) => {
  return (
    <div
      className={`scrollbar scrollbar-thumb-gold scrollbar-track-midnight scrollbar-thumb-rounded-full scrollbar-track-rounded-full ${className}`}
      style={{
        overflowY: 'auto', // Apenas controle de rolagem
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Scrollbar