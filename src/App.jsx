import { useState } from 'react'
import { Header } from './Components/Header'
import Queries from './Components/Queries'
import QueryBox from './Components/QueryBox'
import BottomPanel from './Components/BottomPanel'
import RightPanel from './Components/RightPanel'
function App() {

  return (
    <div className='w-screen h-screen overflow-auto bg-no-repeat bg-[#F3F3F3]'>
     <Header/>
     <div className='flex h-[82vh] mt-4 space-x-8 justify-between'>
        <Queries/>
        <RightPanel/>
        
     </div>
    </div>
  )
}

export default App
