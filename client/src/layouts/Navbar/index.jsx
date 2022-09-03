import React from 'react'
import './assets/styles/index.css'
import NavbarElements from './components/NavbarElements';

const Navbar = () => {

  return (
    <nav className="bg-neutral-800 shadow-sm  shadow-zinc-600   w-full   ">
      <NavbarElements />
    </nav>
  );
}

export default Navbar