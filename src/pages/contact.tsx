
import './contact.scss'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import image1 from '../assets/2354127.png'
import image2 from '../assets/working hrs.png'
import image4 from '../assets/location.png'
import image3 from '../assets/732200.png'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='main'>
        <div>
        <a href=""><img src={image4} alt="help" width="24" height="24" /></a><p>
            location:Madinah-Masjid Nabawi
          </p>
        </div>
        <div><a href=""><img src={image1} alt="help" width="24" height="24" /></a>
        <p>phone:+25463778888 <br />mobile:+25463778888 <br />fax:+25463434443</p></div>
        <div><a href=""><img src={image3} alt="help" width="24" height="24" /></a><p>
          email:infor@abdulrahman</p></div>
          <div>
          <a href=""><img src={image2} alt="help" width="24" height="24" /></a><p>
            working hrs:monday-saturday
          </p>
          </div>
      </div>
      <div className='msg'>
        <div className='textare'>
          <label htmlFor="label">Massage</label><br />
          <textarea name="massage" id="" cols={40} rows={10} maxLength={500}></textarea>

        </div>
        {/* <div className='contact'>
          <div >
            <label htmlFor="name">First name</label>
            <input type="text" placeholder='Enter your name' />
           
          </div>
        <div> <label htmlFor="name">Email</label>
        <input type="text" placeholder='Enter your email addres' /></div>
        </div> */}
        <div>
        
        </div>
        <div className='tec'>
          <label htmlFor="name">First name</label>
        <input className="input input-bordered join-item" placeholder="name" />
        <label htmlFor="email">Email addres</label>
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn join-item rounded-r-full">Subscribe</button>
        
        </div>
       
      </div>
      
      <Footer/>
    </div>
  )
}

export default Contact