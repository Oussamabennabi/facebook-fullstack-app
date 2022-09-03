import React, {  useState } from 'react'

import { CSSTransition } from 'react-transition-group';
import {DisplayDropdown, HelpDropdown, KeyboardDropdown, MainDropdown, SettingsDropdown} from './dropdowns';
   
export const Dropdown = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState('full');
  function calcHeight(el) {

      const height =
        activeMenu === "display" ? el.offsetHeight + 90:el.offsetHeight + 40 ;
      setMenuHeight(height)
    }
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      {/* MAIN DROPDOWN */}
      <CSSTransition
        in={activeMenu === "main"}
        classNames="menu-primary"
        unmountOnExit
        timeout={400}
        onEnter={calcHeight}
      >
        <div className="menu">
          <MainDropdown setActiveMenu={setActiveMenu} />
        </div>
      </CSSTransition>

      {/* SETTINGS DROPDOWN */}
      <CSSTransition
        in={activeMenu === "settings"}
        classNames="menu-secondary"
        unmountOnExit
        timeout={400}
        onEnter={calcHeight}
      >
        <div className="menu">
          <SettingsDropdown setActiveMenu={setActiveMenu} />
        </div>
      </CSSTransition>

      {/* HELP DROPDOWN */}
      <CSSTransition
        in={activeMenu === "help"}
        classNames="menu-secondary"
        unmountOnExit
        timeout={400}
        onEnter={calcHeight}
      >
        <div className="menu">
          <HelpDropdown setActiveMenu={setActiveMenu} />
        </div>
      </CSSTransition>

      {/* DISPLAY DROPDOWN */}
      <CSSTransition
        in={activeMenu === "display"}
        classNames="menu-secondary"
        unmountOnExit
        timeout={400}
        onEnter={calcHeight}
      >
        <div className="menu">
          <DisplayDropdown setActiveMenu={setActiveMenu} />
        </div>
      </CSSTransition>
      {/* KEYBOARD DROPDOWN */}
      <CSSTransition
        in={activeMenu === "keyboard"}
        classNames="menu-third"
        unmountOnExit
        timeout={400}
        onEnter={calcHeight}
      >
        <div className="menu">
          <KeyboardDropdown setActiveMenu={setActiveMenu} />
        </div>
      </CSSTransition>
    </div>
  );
};


export const DropdownItem = ({ children, leftIcon, rightIcon }) => {
    return (
      <div className="dropdown-item" >
        <span className="left-icon">{leftIcon}</span>
        {children}
        <span className="right-icon">{rightIcon}</span>
      </div>
    );
};
