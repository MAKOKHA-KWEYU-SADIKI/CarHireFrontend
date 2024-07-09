
import image1 from '../assets/backround.webp'
import image2 from '../assets/help.png'
import image3 from '../assets/11338496.png'
// import image4 from '../assets/732200.png'
// import image5 from '../assets/3024605.png'
// import image6 from '../assets/2354127.png'
import image7 from '../assets/cancell.jpg'
import './container.scss'
import React from 'react';
const Container: React.FC = () => {
  return (
  <div>
     <div 
      className="h-screen bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: `url(${image1})`,backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '60vh' }}>
      <h1 className='c'>
        <strong>Welcome to Abdurahman's easy drive for better services and pricing<br></br>We are your ultimate vehicle rental solutions</strong> 
      </h1>
      </div>
     <div className='whyUs'>
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
       
     </div>
     <button className="btn btn-active caret-yellow-600">get started</button>
    </div>
    
 
   
  );
}

export default Container;
