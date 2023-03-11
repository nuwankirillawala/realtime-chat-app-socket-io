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
  }, [ENDPOINT, location.search])

  return (
    <div>Chat</div>
  )
}

export default Chat;