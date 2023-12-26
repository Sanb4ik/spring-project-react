import './index.css';

const BurgerBtn = ({ setShow }) => {
  return (
    <button className='hm-menu' onClick={() => setShow(false)}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default BurgerBtn;
