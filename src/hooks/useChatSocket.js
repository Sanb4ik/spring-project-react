import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuth } from './useAuth';

const useChatSocket = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const { getUsername } = useAuth();

  useEffect(() => {
    const newSocket = io('http://localhost:3000', { withCredentials: true });

    newSocket.on('connect', () => {
      console.log('Connected to WebSocket server');
      newSocket.emit('username', getUsername());
    });

    newSocket.on('message', (message) => {
      const m = JSON.parse(message);
      setMessages((prevMessages) => [...prevMessages, m]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = (inputMessage) => {
    if (socket && inputMessage.trim() !== '') {
      let username = getUsername();
      const data = JSON.stringify({ username: username, message: inputMessage });
      socket.emit('message', data);
    }
  };

  return { socket, messages, sendMessage };
};

export default useChatSocket;
