
// // // // import Footer from '../components/footer'
// // // // import Navbar from '../components/navbar'
// // // // import './about.scss'
// // // // import Profile from '../dashbord/profile'

// // // // const About = () => {
// // // //   return (
// // // //     <div>
// // // //       <Navbar/>
      
// // // //       {/* <div className='mainAbout'>
// // // //         <div className='intro'> */}
// // // //          {/* <a href=""><img src={image1} alt="help" width="500" height="300" /></a>
// // // //           <p>
// // // //             Welcome to Abdirahman Easy drive, your trusted partner 
// // // //             in vehicle rental management. 
// // // //             We are dedicated to providing seamless, efficient,
// // // //             and affordable vehicle rental solutions to our 
// // // //             valued customers. It's not just about renting a 
// // // //             car; it's about ensuring your travels in Paros are enriched with the reliability and excellence that
// // // //             Galanakis Rent a Car has been synonymous with
// // // //           </p>

// // // //         </div>
// // // //         <div className='abt'>
// // // //           <div>
// // // //             <h1>mission</h1>
// // // //             <p>Our mission is to revolutionize the vehicle rental 
// // // //               industry through the power of technology, delivering 
// // // //               exceptional customer service and unmatched convenience.
// // // //             </p>
// // // //           </div>
// // // //           <div>
// // // //             <h1>vission</h1>
// // // //             <p>
// // // //             We envision a world where vehicle rentals are hassle-free, 
// // // //             efficient, and accessible to everyone. Our advanced 
// // // //             management system is at the forefront of this transformation,<br></br> 
// // // //             setting new standards for the industry.
// // // //             </p>
// // // //           </div>
// // // //           <div>
// // // //             <h1>core values</h1>
// // // //             <p>
// // // //            <ul>
// // // //             <li> Customer First: Our customers are at the heart of everything we do. 
// // // //               We strive to exceed their expectations with every interaction.</li>
// // // //            <li> Quality and Safety: We ensure our vehicles
// // // //              are maintained to the highest standards of quality and safety.</li> */}
// // // //            {/* <li> Innovation: We leverage cutting-edge technology to 
// // // //             continuously improve our services.</li>
// // // //            <li> Sustainability: We are committed to sustainable practices
// // // //              that protect our planet.
// // // //             </li> */}
// // // //             {/* </ul>
           
           
           
// // // //             </p>
// // // //           </div>
// // // //         </div>
     

// // // //       </div> */}
// // // //       <Profile/>
// // // //       <Footer/>
      
// // // //     </div>
// // // //   )
// // // // }

// // // // export default About
// // // import React from 'react';
// // // import { motion } from 'framer-motion'

// // // function AboutUs() {
// // //   const paragraphs = [
// // //     "Welcome to Abdirahman Easy Drive, your premier vehicle rental service dedicated to providing an exceptional driving experience. Founded in 2023, Abdirahman Easy Drive has quickly become a trusted name in the vehicle rental industry, known for our commitment to quality, convenience, and customer satisfaction.",
// // //     "At Abdirahman Easy Drive, we believe that renting a vehicle should be easy, affordable, and tailored to meet your needs. Whether you're looking for a sleek sedan for a business trip, a spacious SUV for a family vacation, or an eco-friendly electric vehicle, we have a diverse fleet of top-quality vehicles to choose from.",
// // //   ];

// // //   return (
// // //     <div className="about-us-container bg-gray-100 py-12 px-4">
// // //       {paragraphs.map((paragraph, index) => (
// // //         <motion.p
// // //           key={index}
// // //           initial={{ opacity: 0, y: 10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: index * 1, duration: 0.5 }}
// // //           className="text-lg text-gray-800 mb-4"
// // //         >
// // //           {paragraph}
// // //         </motion.p>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default AboutUs;
// // import React from 'react';
// // import { motion } from 'framer-motion';

// // function AboutUs() {
// //   const paragraphs = [
// //     "Welcome to Abdirahman Easy Drive, your premier vehicle rental service dedicated to providing an exceptional driving experience. Founded in [Year], Abdirahman Easy Drive has quickly become a trusted name in the vehicle rental industry, known for our commitment to quality, convenience, and customer satisfaction.",
// //     "At Abdirahman Easy Drive, we believe that renting a vehicle should be easy, affordable, and tailored to meet your needs. Whether you're looking for a sleek sedan for a business trip, a spacious SUV for a family vacation, or an eco-friendly electric vehicle, we have a diverse fleet of top-quality vehicles to choose from.",
// //   ];

// //   return (
// //     <div className="about-us-container bg-gray-100 py-12 px-4">
// //       {paragraphs.map((paragraph, index) => (
// //         <motion.p
// //           key={index}
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: index * 2, duration: 0.5 }} // Increased delay
// //           className="text-2xl text-gray-800 mb-4" // Increased font size
// //         >
// //           {paragraph}
// //         </motion.p>
// //       ))}
// //     </div>
// //   );
// // }

// // export default AboutUs;
// import React from 'react';
// import { motion } from 'framer-motion';

// function AboutUs() {
//   const paragraphs = [
//     "Welcome to Abdirahman Easy Drive, your premier vehicle rental service dedicated to providing an exceptional driving experience. Founded in [Year], Abdirahman Easy Drive has quickly become a trusted name in the vehicle rental industry, known for our commitment to quality, convenience, and customer satisfaction.",
//     "At Abdirahman Easy Drive, we believe that renting a vehicle should be easy, affordable, and tailored to meet your needs. Whether you're looking for a sleek sedan for a business trip, a spacious SUV for a family vacation, or an eco-friendly electric vehicle, we have a diverse fleet of top-quality vehicles to choose from.",
//   ];

//   const container = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15, // Delay between each word
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 },
//   };

//   return (
//     <div className="about-us-container bg-gray-100 py-12 px-4">
//       {paragraphs.map((paragraph, index) => (
//         <motion.div
//           key={index}
//           className="text-2xl text-gray-800 mb-4"
//           variants={container}
//           initial="hidden"
//           animate="visible"
//           transition={{ delay: index * 2 }} // Delay between paragraphs
//         >
//           {paragraph.split(' ').map((word, idx) => (
//             <motion.span key={idx} variants={item} className="inline-block mr-1">
//               {word}
//             </motion.span>
//           ))}
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// export default AboutUs;
