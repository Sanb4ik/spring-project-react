import './index.css';
const CloseButton = ({ setShow, setTransition }) => {
  return (
    <button
      className='close'
      onClick={() => {
        setTransition('');
        setTimeout(() => {
          setShow(true);
        }, 400);
      }}
    ></button>
  );
};

export default CloseButton;
