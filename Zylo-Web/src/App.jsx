import React from 'react'
import SideBar from './component/SideBar'
import Player from './component/Player'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SideBar/>
      </div>
      <Player/>
    </div>
  )
}

export default App
