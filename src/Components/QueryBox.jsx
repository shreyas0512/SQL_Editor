import React, { useEffect } from 'react'
import {useMemo,useState} from 'react'

function QueryBox(props) {
    const[query,setQuery] = useState('')
    const[test,setTest] = useState(false)
    const handleRun = async()=>{
        setTest(!test)
        setQuery('test')
      };
      useEffect(() => {
        //run the csv function
          if(query!=""){
           props.runQuery(query)
            console.log('function ran')
          }
       },[query])
  return (
    <div className='flex flex-col mr-4'>
        <textarea className='bg-[#F7F7F7] h-[20vh] w-full border-[1.3px] border-[#C7C5C5] px-4 py-2 focus:outline-none resize-none' placeholder='Enter your query here...'></textarea>
        <div className='self-end space-x-8 mt-2'>
            <button className='self-end border-[1.5px] border-[#271BB1] px-8 rounded-md text-[#271BB1] font-bold py-1'>Save</button>
            <button className='self-end border-[1.5px] bg-[#271BB1] px-8 rounded-md text-white font-bold py-1' onClick={async()=>{
              
                handleRun()}}>Run</button>
        </div>
    </div>
  )
}

export default QueryBox