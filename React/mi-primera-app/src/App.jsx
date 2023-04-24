import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/welcome'

function App() {

  let [count, setCount] = useState(0)
  
  const nombre = "Equipo de NT2"
  return (
    <div className="App">
      
      <Welcome nombre={nombre} otraProp={[]} />


      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Welcome />
      {/* <Welcome />
      <Welcome />
      <Welcome /> */}
    </div>
  )
}

export default App
