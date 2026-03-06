import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: "yusuf",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind Test</h1>
      <Card username=" Muhammad" btntext='wanna contact' /> {/* Direct Object or array pass nhi kar skte */}
    </>
  )
}

export default App
