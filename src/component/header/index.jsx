import './index.css';
import SpringLogo from '../spring-logo';
import NavbarMenu from '../navbar-menu';
import NavbarMenuMobile from '../navbar-menu-mobile';
import { useState } from 'react';
import BurgerBtn from '../burger-button';
import CloseButton from '../coles-button';
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
            <NavbarMenuMobile />
          </>
        )}
        <NavbarMenu />
      </nav>
    </header>
  );
};

export default Header;
