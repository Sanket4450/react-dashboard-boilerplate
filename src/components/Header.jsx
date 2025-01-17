export const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      style={{
        height: '10vh',
        width: '100%',
        flexShrink: 0,
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '0 20px',
        fontWeight: 'bold',
        color: 'white',
        fontSize: '20px',
      }}>
      <button
        style={{ padding: '8px', backgroundColor: 'gray' }}
        onClick={() => setSidebarOpen(!sidebarOpen)}>
        ꠵
      </button>
      <p>Welcome to Dashboard</p>
    </div>
  )
}
