import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import twaLogo from './assets/tapps.png'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count+1)
  }, [WebApp.isExpanded])

  return (
    <>
      <h2>Anukriti</h2>
    </>
  )
}

export default App
