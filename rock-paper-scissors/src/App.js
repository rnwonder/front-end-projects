import React, { useEffect, useState } from 'react';
import './App.css';
import Score from './components/Score'
import Game from './components/Game'
import Active from './components/Active';
import Rule from './components/Rule'

function App() {

  

  const [count, setCount] = useState(12)
  const [userDecision, setUserDecision] = useState('')
  
  const [gameStart, setGameStart] = useState(true)
  const [dd, setDd] = useState(false)

  // useEffect(()=>{
  //   getLocalStorage()
  // }, [])

  // useEffect(()=>{
  //   saveToLocalStorage()
  // }, [count])

  // const saveToLocalStorage = () => {
  //   localStorage.setItem("count", count)
  // }

  // const getLocalStorage = () => {
  //   if (localStorage.getItem("count") === null) {
  //     localStorage.setItem("count", 12)
  //   } else {
  //     let countLocal = localStorage.getItem("count")
  //     setCount(countLocal)
  //   }
  // }

  
  return (
    <div>
      <Score score={count} />
      <Game active={setDd} userDecision={setUserDecision} startStatus={gameStart} setStartStatus={setGameStart} />
      <Active  userDecision={userDecision} dd={dd} setDd={setDd} setScore={setCount} setStartStatus={setGameStart} />
      <Rule />
    </div>
  );
}

export default App;
