import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import UseAnimationFrame from './UseAnimationFrame.jsx'
import Snowfall from 'react-snowfall'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <ThemeProvider>
      {/* App content */}
      <App />

      {/* Snowfall overlay */}
      <div
        style={{
          position: 'fixed',   // stays on top of viewport
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none', // allows clicks to pass through
          zIndex: 9999,         // ensures it's above other elements
        }}
      >
        <Snowfall
          color="white"
          snowflakeCount={200}
          radius={[2, 5]}
          speed={[1, 3]}
          wind={[0, 0.5]}
        />
      </div>

      <UseAnimationFrame />
    </ThemeProvider>
  </StrictMode>
)
