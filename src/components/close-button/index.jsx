import './index.css';
const CloseButton = ({ setShow }) => {
  return <button className='close' onClick={() => setShow(true)}></button>;
};

export default CloseButton;
