import React from 'react';
import Video from '../img/video.png';
import Add from '../img/add user.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span className="sender">Mac</span>
        <div className="chatIcons">
          <img className="vid-icon" src={Video} alt="" />
          <img className="vid-icon" src={Add} alt="" />
          <img className="vid-icon" src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
