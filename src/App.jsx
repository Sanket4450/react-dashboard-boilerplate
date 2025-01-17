import { Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { routes } from './router'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div
      style={{
        height: '100dvh',
        width: '100vw',
        display: 'flex',
        overflow: 'hidden',
      }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div
          style={{
            flexGrow: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
          }}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
