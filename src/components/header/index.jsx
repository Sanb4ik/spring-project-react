import './index.css';
import SpringLogo from '../spring-logo';
import NavbarMenuDesktop from '../navbar-menu/desktop';
import NavbarMenuMobile from '../navbar-menu/mobile';
import { useState } from 'react';
import BurgerBtn from '../burger-button';
import CloseButton from '../close-button';
const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className='header'>
      <nav className='nav container'>
        <SpringLogo />
        <BurgerBtn setShow={setShow} />
        {show && <CloseButton setShow={setShow} />}
        <NavbarMenuMobile show={show} />
        <NavbarMenuDesktop />
      </nav>
    </header>
  );
};

export default Header;
