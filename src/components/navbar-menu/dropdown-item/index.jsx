const DropDownItem = ({ item, liClass, aClass }) => {
  return (
    <li className={liClass}>
      <a className={aClass} href={item.href}>
        {item.text}
      </a>
    </li>
  );
};

export default DropDownItem;
