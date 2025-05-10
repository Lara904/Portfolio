
import '../styles/Badge.css'

export default function Badge({ label, icon, description, index, isActive, toggle }) {
  return (
    <div className="badge-wrapper">
      <button 
        className="badge" 
        onClick={() => toggle(index)} 
        aria-expanded={isActive}
        aria-controls={`desc-${index}`}
      >
        <div className="badge-icon">{icon}</div>
        <span className="badge-label">{label}</span>
      </button>

      <div 
        id={`desc-${index}`}
        className={`badge-info ${isActive ? 'badge-info-active' : ''}`}
      >
        {description}
      </div>
    </div>
  )
}