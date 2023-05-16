import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { TaskList } from './Components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <Header />
        <TaskList />
        
      </div>
      
  )
}

export default App
