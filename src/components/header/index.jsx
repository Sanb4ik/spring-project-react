import './index.css';
import SpringLogo from '../spring-logo';
import NavbarMenu from '../navbar-menu/desktop';
import NavbarMenuMobile from '../navbar-menu/mobile';
import { useState } from 'react';
import BurgerBtn from '../burger-button';
import CloseButton from '../close-button';
const Header = () => {
  const [show, setShow] = useState(true);
  return (
    <header className='header'>
      <nav className='nav container'>
        <SpringLogo />
        {show ? (
          <BurgerBtn setShow={setShow} />
        ) : (
          <>
            <CloseButton setShow={setShow} />
            <NavbarMenuMobile show={show} />
          </>
        )}
        <NavbarMenu />
      </nav>
    </header>
  );
};

export default Header;