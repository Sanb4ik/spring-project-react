import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './index.css';
import { useAuth } from '../../hooks';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const { getUsername } = useAuth();

  useEffect(() => {
    const newSocket = io('http://localhost:3000', { withCredentials: true });

    newSocket.on('connect', () => {
      console.log('Connected to WebSocket server');
      newSocket.emit('username', getUsername());
    });

    newSocket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    newSocket.on('activeUsers', (users) => {
      console.log('Active users:', users);
    });

    newSocket.on('userConnected', (username) => {
      console.log(`User connected: ${username}`);
    });

    newSocket.on('userDisconnected', (username) => {
      console.log(`User disconnected: ${username}`);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    let username = getUsername();
    console.log(username);
    const data = JSON.stringify({ username: username, message: inputMessage });
    if (socket && inputMessage.trim() !== '') {
      socket.emit('message', data);
      setInputMessage('');
    }
  };

  return (
    <div className='chat'>
      <form className='chat-container' onSubmit={(e) => sendMessage(e)}>
        <h1>Chat Component</h1>
        <div className='message-container'>
          {messages.map((message, index) => (
            <div key={index} className='message'>
              {message}
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
