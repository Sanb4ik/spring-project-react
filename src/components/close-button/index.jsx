import './index.css';
const CloseButton = ({ setShow }) => {
  return <button className='close' onClick={() => setShow(false)}></button>;
};

export default CloseButton;
