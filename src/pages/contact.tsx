
// import './contact.scss'
// import Navbar from '../components/navbar'
// import Footer from '../components/footer'
// import image1 from '../assets/2354127.png'
// import image2 from '../assets/working hrs.png'
// import image4 from '../assets/location.png'
// import image3 from '../assets/732200.png'
// const Contact = () => {
//   return (
//     <div>
//       <Navbar/>
//       <div className='main'>
//         <div>
//         <a href=""><img src={image4} alt="help" width="24" height="24" /></a><p>
//             location:Madinah-Masjid Nabawi
//           </p>
//         </div>
//         <div><a href=""><img src={image1} alt="help" width="24" height="24" /></a>
//         <p>phone:+25463778888 <br />mobile:+25463778888 <br />fax:+25463434443</p></div>
//         <div><a href=""><img src={image3} alt="help" width="24" height="24" /></a><p>
//           email:infor@abdulrahman</p></div>
//           <div>
//           <a href=""><img src={image2} alt="help" width="24" height="24" /></a><p>
//             working hrs:monday-saturday
//           </p>
//           </div>
//       </div>
//       <div className='msg'>
//         <div className='textare'>
//           <label htmlFor="label">Massage</label><br />
//           <textarea name="massage" id="" cols={40} rows={10} maxLength={500}></textarea>

//         </div>
//         {/* <div className='contact'>
//           <div >
//             <label htmlFor="name">First name</label>
//             <input type="text" placeholder='Enter your name' />
           
//           </div>
//         <div> <label htmlFor="name">Email</label>
//         <input type="text" placeholder='Enter your email addres' /></div>
//         </div> */}
//         <div>
        
//         </div>
//         <div className='tec'>
//           <label htmlFor="name">First name</label>
//         <input className="input input-bordered join-item" placeholder="name" />
//         <label htmlFor="email">Email addres</label>
//         <input className="input input-bordered join-item" placeholder="Email" />
//         <button className="btn join-item rounded-r-full">Subscribe</button>
        
//         </div>
       
//       </div>
      
//       <Footer/>
//     </div>
//   )
// }

// export default Contact
// import React, { useState } from 'react';
// import image1 from '../assets/2354127.png'
// import image2 from '../assets/working hrs.png'
// import image4 from '../assets/location.png'
// import image3 from '../assets/732200.png'
// import './contact.scss'
// import Navbar from '../components/navbar'
// const ContactUs: React.FC = () => {
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [message, setMessage] = useState<string>('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Message:', message);
//   };

//   return (
//         <div>
//       <Navbar/>
//       <div className='main'>
//         <div>
//         <a href=""><img src={image4} alt="help" width="24" height="24" /></a><p>
//             location:Madinah-Masjid Nabawi
//           </p>
//         </div>
//         <div><a href=""><img src={image1} alt="help" width="24" height="24" /></a>
//         <p>phone:+25463778888 <br />mobile:+25463778888 <br />fax:+25463434443</p></div>
//         <div><a href=""><img src={image3} alt="help" width="24" height="24" /></a><p>
//           email:infor@abdulrahman</p></div>
//           <div>
//           <a href=""><img src={image2} alt="help" width="24" height="24" /></a><p>
//             working hrs:monday-saturday
//           </p>
//           </div>
//       </div>
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               rows={5}
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ContactUs;
// import React, { useState } from 'react';
// import image1 from '../assets/2354127.png';
// import image2 from '../assets/working hrs.png';
// import image4 from '../assets/location.png';
// import image3 from '../assets/732200.png';
// import './contact.scss';
// import Navbar from '../components/navbar';

// const ContactUs: React.FC = () => {
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [message, setMessage] = useState<string>('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Message:', message);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="main">
//         <div>
//           <a href=""><img src={image4} alt="help" width="24" height="24" /></a>
//           <p>Location: Madinah-Masjid Nabawi</p>
//         </div>
//         <div>
//           <a href=""><img src={image1} alt="help" width="24" height="24" /></a>
//           <p>Phone: +25463778888 <br />Mobile: +25463778888 <br />Fax: +25463434443</p>
//         </div>
//         <div>
//           <a href=""><img src={image3} alt="help" width="24" height="24" /></a>
//           <p>Email: info@abdulrahman</p>
//         </div>
//         <div>
//           <a href=""><img src={image2} alt="help" width="24" height="24" /></a>
//           <p>Working Hrs: Monday-Saturday</p>
//         </div>
//       </div>
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
//           <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex items-center space-x-4">
//               <label className="block text-gray-700 text-sm font-bold w-1/6" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 required
//               />
//             </div>
//             <div className="flex items-center space-x-4">
//               <label className="block text-gray-700 text-sm font-bold w-1/6" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 required
//               />
//             </div>
//             <div className="flex items-center space-x-4">
//               <label className="block text-gray-700 text-sm font-bold w-1/6" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 rows={5}
//                 required
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState } from 'react';
import image1 from '../assets/2354127.png';
import image2 from '../assets/working hrs.png';
import image4 from '../assets/location.png';
import image3 from '../assets/732200.png';
import './contact.scss';
import Navbar from '../components/navbar';

const ContactUs: React.FC = () => {
  // const [name, setName] = useState<string>('');
  // const [email, setEmail] = useState<string>('');
  // const [message, setMessage] = useState<string>('');

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Message:', message);
  // };

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
              rows="4"
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
