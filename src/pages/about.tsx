
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import './about.scss'
import image1 from '../assets/handingover.jpeg'

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='mainAbout'>
        <div className='intro'>
         <a href=""><img src={image1} alt="help" width="500" height="300" /></a>
          <p>
            Welcome to Abdirahman Easy drive, your trusted partner 
            in vehicle rental management. 
            We are dedicated to providing seamless, efficient,
            and affordable vehicle rental solutions to our 
            valued customers. It's not just about renting a 
            car; it's about ensuring your travels in Paros are enriched with the reliability and excellence that
            Galanakis Rent a Car has been synonymous with
          </p>

        </div>
        <div className='abt'>
          <div>
            <h1>mission</h1>
            <p>Our mission is to revolutionize the vehicle rental 
              industry through the power of technology, delivering 
              exceptional customer service and unmatched convenience.
            </p>
          </div>
          <div>
            <h1>vission</h1>
            <p>
            We envision a world where vehicle rentals are hassle-free, 
            efficient, and accessible to everyone. Our advanced 
            management system is<br></br> at the forefront of this transformation, 
            setting new standards for the industry.
            </p>
          </div>
          <div>
            <h1>core values</h1>
            <p>
           <ul>
            <li> Customer First: Our customers are at the heart of everything we do. 
              We strive to exceed their expectations with every interaction.</li>
           <li> Quality and Safety: We ensure our vehicles
             are maintained to the highest standards of quality and safety.</li>
           {/* <li> Innovation: We leverage cutting-edge technology to 
            continuously improve our services.</li>
           <li> Sustainability: We are committed to sustainable practices
             that protect our planet.
            </li> */}
            </ul>
           
           
           
            </p>
          </div>
        </div>
     

      </div>
      <Footer/>

    </div>
  )
}

export default About