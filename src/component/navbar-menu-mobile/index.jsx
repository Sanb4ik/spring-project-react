import { useState } from 'react';
import { MENU_ITEMS_DATA } from '../../constant';
import { generateDropDownItems } from '../navbar-menu';
import './index.css';

const createDropdownMenuForMobile = (menuData, openIndex, setOpenIndex) => {
  const handleListClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  let open = openIndex === menuData.title;
  return (
    <article className='menu-item' key={menuData.title}>
      <div className='menu-item__container' onClick={() => handleListClick(menuData.title)}>
        <h1 className={`menu-item__h1 ${open && 'green'}`}>{menuData.title}</h1>
        <button className={`menu-item__arrow ${open ? 'up' : 'down'}`}></button>
      </div>
      <ul className={`dropdown-m ${open && 'show'}`}>
        {generateDropDownItems(menuData.items, 'my-3', 'dropdown-m__item')}
      </ul>
    </article>
  );
};

const NavbarMenuMobile = (show) => {
  const [open, setOpen] = useState('');

  const renderedMenus = MENU_ITEMS_DATA.map((menu) =>
    createDropdownMenuForMobile(menu, open, setOpen),
  );
  return (
    <div className={`overlay ${show && 'show'}`}>
      <div className='burger-menu'>
        <div className='menu-content'>{renderedMenus}</div>;
      </div>
    </div>
  );
};

export default NavbarMenuMobile;
