// src/components/MessagingView/MessageInput.js
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import '../MessagingView.css';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="message-input-container">
      <textarea
        className="message-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Send message"
        rows={1}
      />
      <button className="send-button" onClick={handleSend}>
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default MessageInput;
