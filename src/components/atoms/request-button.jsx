export default function RequestButton ({onClick, children, deviceType='', className='', ...props}) {
  return (
    <button {...props} onClick={onClick} className={`req-btn ${deviceType} ${className}`}>
      {children}
    </button>
  )
}