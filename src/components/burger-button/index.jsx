import './index.css';

const BurgerBtn = ({ setShow }) => {
  return (
    <button className='hm-menu' onClick={() => setShow(true)}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default BurgerBtn;
