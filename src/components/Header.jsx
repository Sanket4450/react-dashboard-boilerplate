import React from 'react'

export const Header = () => {
  return (
    <div
      style={{
        height: '10vh',
        width: '100%',
        flexShrink: 0,
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        fontWeight: 'bold',
        color: 'white',
        fontSize: '20px',
      }}>
      This is the Header
    </div>
  )
}
