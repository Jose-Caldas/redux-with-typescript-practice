import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
