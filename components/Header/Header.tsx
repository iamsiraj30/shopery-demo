import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full">
      <TopBar />
      <Navbar />
    </header>
  );
};

export default Header;
