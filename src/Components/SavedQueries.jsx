import React, { useEffect } from 'react'
import { CurrTable } from '../Contexts/TableContext'

function SavedQueries() {
    const { savedQueries } = CurrTable();
  return (
    <div className='flex flex-col h-1/2'>
        <h1 className='text-center font-semibold text-xl'>Saved Queries</h1>
        {savedQueries.map((element,index)=>{
            return(
                <button key={index} className='text-left pl-2 pr-1 border-[1px] break-words border-[#c8c6c6] mt-2 py-1 mx-2 rounded-md hover:bg-[#271BB1] hover:text-white'>
                    {element}
                </button>
            )
            
        } )}      
    </div>
  )
}

export default SavedQueries