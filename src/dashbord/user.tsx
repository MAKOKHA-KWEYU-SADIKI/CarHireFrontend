

// import Footer from '../components/footer';
// import Navbar from '../components/navbar';
// import { Outlet } from 'react-router-dom';
// import './user.scss';
// import Sidebar from '../components/sidebar'
// import { useSelector } from 'react-redux';
// // import Profile from '../dashbord/profile'
// import UserTable from './usertable';
// import { RootState } from '../app/store';
// const User = ({children}:any) => {
//   const user = useSelector((state: RootState) => state.user.user);
//   return (
//   <div>
//   <div className='fix-top right-0 left-0'>
//   <Navbar/>

//   </div>
//     <div className=''>
//     <Sidebar/>

//     </div>
    
    
//     {children}
//     <Footer/>
//     <Outlet/>
//    </div>
//    );
//  };

//  export default User;

import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const User = ({ children }: any) => {
  useSelector((state: RootState) => state.user.user);
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <div className="flex flex-1 pt-16"> {/* Adjust padding-top based on Navbar height */}
        <div className="fixed top-16 left-0 h-[calc(100%-4rem)] w-64 overflow-y-auto bg-gray-200 z-40"> {/* Adjust width and height */}
          <Sidebar />
        </div>
        <div className="ml-64 w-full pt-4 pb-20 overflow-y-auto">
          {children}
          <Outlet />
        </div>
      </div >
      <div className="fixed bottom-0 w-full z-50">
   
      </div>
      
    </div>
  );
};

export default User;
