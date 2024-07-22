
import image2 from '../assets/mercedes2.png';
import Navbar from './navbar';
import Footer from '../components/footer'
const AboutUsNav = () => {
  return (
   <div>
    <Navbar/>
     <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8">
        <div className="lg:w-1/2">
          <img
            src={image2}
            alt="Company Vehicle"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8 space-y-4">
          <h1 className="text-5xl font-bold text-gray-800 lg:text-left text-center">
            About Abdirahman Easy Drive
          </h1>
          <p className="text-lg text-gray-600">
            Abdirahman Easy Drive is committed to providing top-notch vehicle rental services. 
            Our mission is to deliver a seamless and convenient rental experience for our customers.
          </p>
        </div>
      </div>
      <div className="w-full max-w-4xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-1/2 space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">Mission</h2>
            <p className="text-gray-600">
              To offer high-quality, affordable vehicle rental services that exceed customer expectations.
            </p>
          </div>
          <div className="lg:w-1/2 space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">Vision</h2>
            <p className="text-gray-600">
              To be the leading vehicle rental company known for excellent service and customer satisfaction.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Core Values</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Integrity</li>
            <li>Customer Focus</li>
            <li>Innovation</li>
            <li>Excellence</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default AboutUsNav;
