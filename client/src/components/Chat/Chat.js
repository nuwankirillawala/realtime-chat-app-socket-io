import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'http://localhost:5000/';

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT)

    console.log(name, room);
    console.log(socket);
    setName(name);
    setRoom(room);

    socket.emit('join', {name, room}, () => {
      // error handling through callback fn
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, location.search])

  return (
    <div>Chat</div>
  )
}

export default Chat;