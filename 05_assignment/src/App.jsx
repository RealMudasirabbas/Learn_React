import React from 'react'
import Profile from './components/Profile';
import Clock from './components/Clock'
import './App.css'

function App() {
  const date = new Date();

  return (
    <>
        <Clock time={date}/>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  )
}


export default App
