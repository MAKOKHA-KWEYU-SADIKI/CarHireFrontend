

import image1 from '../assets/2354127.png';
import image2 from '../assets/working hrs.png';
import image4 from '../assets/location.png';
import image3 from '../assets/732200.png';
import './contact.scss';
import Navbar from '../components/navbar';

const ContactUs: React.FC = () => {

  return (
    <div>
      <Navbar />
      <div className="main">
        <div>
          <a href=""><img src={image4} alt="help" width="24" height="24" /></a>
          <p>Location: Madinah-Masjid Nabawi</p>
        </div>
        <div>
          <a href=""><img src={image1} alt="help" width="24" height="24" /></a>
          <p>Phone: +25463778888 <br />Mobile: +25463778888 <br />Fax: +25463434443</p>
        </div>
        <div>
          <a href=""><img src={image3} alt="help" width="24" height="24" /></a>
          <p>Email: info@abdulrahman</p>
        </div>
        <div>
          <a href=""><img src={image2} alt="help" width="24" height="24" /></a>
          <p>Working Hrs: Monday-Saturday</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">CONTACT US</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">YOUR MESSAGE</label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your message..."
              rows={4}
            ></textarea>
          </div>
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">FIRST NAME*</label>
            <input
              id="firstName"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">EMAIL*</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="email@domain.com"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full p-3 bg-teal-600 text-white font-bold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
