import Header from './Header';
import Footer from './Footer';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='mainContainer'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;