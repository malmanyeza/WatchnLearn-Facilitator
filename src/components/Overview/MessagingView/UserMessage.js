// src/components/MessagingView/UserMessage.js
import React from 'react';
import '../MessagingView.css';

const UserMessage = ({ message }) => {
  return (
    <div className="user-message">
      {message}
    </div>
  );
};

export default UserMessage;
