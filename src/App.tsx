import React from 'react'
import './App.css'
import ReducerSample from './components/ContextSample';
import { SampleProvider } from './contexts/Sample';

function App() {
  const handleSubmit = (form: { name: string; description: string }) => {
    console.log(form)
  }

  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  )
}

export default App
