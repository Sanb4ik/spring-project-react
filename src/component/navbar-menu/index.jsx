import { MENU_ITEMS_DATA } from '../../constant';
import './index.css';

export const generateDropDownItems = (items, liClass, aClass) => {
  return items.map((item, index) => (
    <li className={liClass} key={index}>
      <a className={aClass} href={item.href}>
        {item.text}
      </a>
    </li>
  ));
};

const createDropdownMenu = (menuData) => {
  return (
    <div className='dropdown' key={menuData.title}>
      <button className='drop-btn'>{menuData.title}</button>
      <i className='arrow down'></i>
      <ul className='dropdown-content'>
        {generateDropDownItems(menuData.items, '', 'dropdown-item')}
      </ul>
    </div>
  );
};

const NavbarMenu = () => {
  const renderedMenus = MENU_ITEMS_DATA.map((menu) => createDropdownMenu(menu));
  return <div className='navbar-menu'>{renderedMenus}</div>;
};

export default NavbarMenu;
