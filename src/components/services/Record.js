import React from 'react'
import './record.css'
function Record() {
    const data = [
        {
            digit:'190+',
            name:'project'
        },
        {
            digit:'80+',
            name:'Client'
        },
        {
            digit:'200+',
            name:'Professionals'
        },
        {
            digit:'97%',
            name:'clients'
        }
    ]
  return (
    <div className='row m-0 p-0 m-top-4'>
      {
        data.map((record)=>{
            return(
                <div className='col-3  recorddata'>
                 <div className='digit'>{record.digit}</div>
                 <div className='recordname'>{record.name}</div>
                </div>
            )
        })
      }
    </div>
   
  )
}

export default Record
