
import image1 from '../assets/backround.webp'
import './container.scss'
import React from 'react';
const Container: React.FC = () => {
  return (

     <div 
      className="h-screen bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: `url(${image1})`,backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '60vh' }}>
      <h1 className='c'>
        <strong>Welcome to Abdurahman's easy drive for better services and pricing<br></br>We are your ultimate vehicle rental solutions</strong> 
      </h1>
    
    </div>
 
   
  );
}

export default Container;
