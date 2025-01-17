export const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {Array.from({ length: 500 }).map((_, idx) => (
        <div
          style={{
            width: '100%',
            padding: '12px 20px',
            backgroundColor: 'skyblue',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '8px',
          }}>
          Here is the line number: {idx + 1}
        </div>
      ))}
    </div>
  )
}
