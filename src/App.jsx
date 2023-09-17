import { useState } from 'react'
import { Header } from './Components/Header'
import Queries from './Components/Queries'
import QueryBox from './Components/QueryBox'
import BottomPanel from './Components/BottomPanel'
import RightPanel from './Components/RightPanel'
import { UserContextProvider } from './Contexts/UserContext'
import { TableContextProvider } from './Contexts/TableContext'
function App() {

  return (
    <UserContextProvider>
    <div className='w-screen h-screen overflow-auto bg-no-repeat  bg-[#F3F3F3]'>
      
     <Header/>
     <TableContextProvider>
          <div className='flex h-[82vh] mt-4 space-x-8 justify-between'>
              <Queries/>
              <RightPanel/>
              
          </div>
     </TableContextProvider>
    
    </div>
    </UserContextProvider>
  )
}

export default App
