export default function RequestButton ({onClick, children, deviceType='', ...props}) {
  return (
    <button {...props} onClick={onClick} className={`req-btn ${deviceType}`}>
      {children}
    </button>
  )
}