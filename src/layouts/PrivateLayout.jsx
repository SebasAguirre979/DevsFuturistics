import React from 'react';


const PrivateLayout = ({ children }) => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-nowrap h-full w-full'>
        
        <main className='flex w-full bg-blue-500 overflow-y-scroll'>{children}</main>
      </div>
    </div>
  );
};

export default PrivateLayout;