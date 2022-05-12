import React from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter'
import MyForm from './components/MyForm'

function App() {
  const handleSubmit = (form: { name: string; description: string }) => {
    console.log(form)
  }

  return (
    <div className="App">
      <MyForm onSubmit={handleSubmit} />
      <Counter />
    </div>
  )
}

export default App
