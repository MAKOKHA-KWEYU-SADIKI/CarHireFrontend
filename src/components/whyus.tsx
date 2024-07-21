import React from 'react'
import image2 from '../assets/help.png'
import image3 from '../assets/11338496.png'
import image7 from '../assets/cancell.jpg'
const Whyus = () => {
  return (
    <div> <div className='whyUs'>
    <div >
        <a href=""><img src={image2} alt="help" width="90" height="90" /></a>
        <p>
            <strong>We are here for you</strong><br />custommer support with over 30 languages
        </p>
     </div>
     <div>
        <a href=""><img src={image7} alt="help" width="90" height="90" /></a>
        <p>
            Free cancellation within 18hrs
        </p>
     </div>
     <div>
         <a href=""><img src={image3} alt="help" width="90" height="90" /></a>
         <p>
            we are trust worthy
         </p>
      </div>
      
    </div></div>
  )
}

export default Whyus
