import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      
    <h1>Welcome to my place</h1>

    <div className='flex flex-col'>

    <a href="/SayHello" className='mb-2'>Say Hello</a>

    <a href="/AskingQuestions"className='mb-2'>Asking Questions</a>

    <a href="/GTLT"className='mb-2'>GTLT</a>

    <a href="/AddTwo"className='mb-2'>Adding numbers</a>

    <a href="/MadLib"className='mb-2'>MadLib</a>

    <a href="/OddOrEven"className='mb-2'>Odd Or Even</a>
    
    <a href="/ReverseAlpha"className='mb-2'>Reverse It Alpha</a>

    <a href="/ReverseNums"className='mb-2'>Reverse It Nums</a>

    <a href="/Magic8Ball"className='mb-2'>Magic 8 Ball</a>

    <a href="/Restaurant"className='mb-2'>Restaurant Picker</a>

    </div>

    </>
  )
}

export default App
