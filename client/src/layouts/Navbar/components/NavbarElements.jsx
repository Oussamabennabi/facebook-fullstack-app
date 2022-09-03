import React from 'react'
import LeftIcons from './LeftIcons';
import MiddleIcons from './MiddleIcons';
import RightIcons from './RightIcons';

const NavbarElements = () => {
  return (
    <ul className='nav-elements '>
      <LeftIcons />
      <MiddleIcons />
      <RightIcons />
    </ul>
  );
}

export default NavbarElements