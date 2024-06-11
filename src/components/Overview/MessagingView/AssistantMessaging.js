// src/components/MessagingView/AssistantMessage.js
import React from 'react';
import '../MessagingView.css';

const AssistantMessage = ({ message }) => {
  return (
    <div className="assistant-message">
      {message}
    </div>
  );
};

export default AssistantMessage;
