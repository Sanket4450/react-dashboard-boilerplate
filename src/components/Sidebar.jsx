import { routes } from '../router'
import { NavLink } from 'react-router-dom'
import './styles/Sidebar.css'

export const Sidebar = ({ sidebarOpen }) => {
  if (!sidebarOpen) return null

  return (
    <div
      style={{
        height: '100%',
        width: '20vw',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        padding: '20px 12px',
        backgroundColor: 'gray',
      }}>
      {routes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) => (isActive ? 'active-nav' : 'nav')}
          style={{
            padding: '10px 18px',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '8px',
          }}>
          {route.label}
        </NavLink>
      ))}
    </div>
  )
}
