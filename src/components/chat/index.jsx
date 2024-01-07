import { useState } from 'react';
import './index.css';
import useChatSocket from '../../hooks/useChatSocket';

const Chat = () => {
  const { messages, sendMessage } = useChatSocket();
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div className='chat'>
      <form className='chat-container' onSubmit={(e) => handleSubmit(e)}>
        <h1>Chat Component</h1>
        <div className='message-container'>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.username === 'you' ? 'sent' : 'received'}`}
            >
              <p className='username'>{message.username}</p>
              {message.text}
              <p className='time'>{message.time}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          <input
            type='text'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className='chat-input'
          />
          <input type='submit' value='Send' className='login-btn' style={{ marginLeft: '20px' }} />
        </div>
      </form>
    </div>
  );
};

export default Chat;
