import React from 'react';
import Navbar2 from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import RutasPrivadas from '../componentes/RutasPrivadas';


const PrivateLayout = ({ children }) => {
  return (
    <RutasPrivadas>
    <div className='flex w-screen h-screen'>
      <div className='flex flex-nowrap h-full w-full'>
        <Navbar2 />
        <main className='flex w-full bg-blue-500 overflow-y-scroll'>{children}</main>
        <Footer />
      </div>
    </div>
    </RutasPrivadas>
  );
};

export default PrivateLayout;