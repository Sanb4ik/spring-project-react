import { useState } from 'react';
import { MENU_ITEMS_DATA } from '../../../constant';
import './index.css';
import DropDownItem from '../dropdown-item';

const DropdownMenu = ({ menuData, openIndex, setOpenIndex }) => {
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
        {menuData.items.map((item) => (
          <DropDownItem key={item.text} item={item} liClass='my-3' aClass='dropdown-m__item' />
        ))}
      </ul>
    </article>
  );
};

const NavbarMenuMobile = (show) => {
  const [open, setOpen] = useState('');

  return (
    <div className={`overlay ${show && 'show'}`}>
      <div className='burger-menu'>
        <div className='menu-content'>
          {MENU_ITEMS_DATA.map((menu) => (
            <DropdownMenu
              key={`${menu.title}_m`}
              menuData={menu}
              openIndex={open}
              setOpenIndex={setOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarMenuMobile;
