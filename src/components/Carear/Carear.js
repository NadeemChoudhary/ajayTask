import React from 'react'

import carear from '../../Assets/Images/carear.png'
import circle from '../../Assets/Images/circle.png'
import halfcircle from '../../Assets/Images/halfcircle.png'
import {FaLongArrowAltRight} from 'react-icons/fa'
function Carear() {

  return (
    <div className='row m-0 p-0'>
      <div className='col-6 serviceideas'>
        <img src={circle} className='circle'/>
       <div className='servicenmae'>Service</div>
       <div className='ourservices'>Our services that can help your business</div>
       <div className='serviceparagraph'>Navigate change, develop on-demand skills. Your turnaround journey starts with Olvera.</div>
       {/* <div className='serviceparagraph'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div> */}
       <button>Search Carear</button>
       <img src={halfcircle} className='halfcircle'/>
      </div>
      <div className='col-6 ourservicesitem'>

      <img src={carear} style={{height:'90%',width:'100%'}}/>


      </div>
  
    </div>
  )
}

export default Carear