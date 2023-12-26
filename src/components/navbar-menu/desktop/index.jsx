import { MENU_ITEMS_DATA } from '../../../constant';
import './index.css';
import DropDownItem from '../dropdown-item';

const DropdownMenu = ({ menuData }) => {
  return (
    <div className='dropdown' key={menuData.title}>
      <button className='drop-btn'>{menuData.title}</button>
      <i className='arrow down'></i>
      <ul className='dropdown-content'>
        {menuData.items.map((item) => (
          <DropDownItem key={item.text} item={item} liClass='' aClass='dropdown-item' />
        ))}
      </ul>
    </div>
  );
};

const NavbarMenuDesktop = () => {
  return (
    <div className='navbar-menu'>
      {MENU_ITEMS_DATA.map((menu) => (
        <DropdownMenu key={menu.title} menuData={menu} />
      ))}
    </div>
  );
};

export default NavbarMenuDesktop;
