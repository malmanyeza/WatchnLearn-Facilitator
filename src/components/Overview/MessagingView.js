import React, { useState, useEffect } from 'react';
import AssistantMessage from './MessagingView/AssistantMessaging'
import UserMessage from './MessagingView/UserMessage';
import MessageInput from './MessagingView/MessagingInput';
import './MessagingView.css';

const MessagingView = () => {
  const [messages, setMessages] = useState([
    { type: 'user', text: 'Can you give an overview of how students in my class are performing?' },
    { type: 'assistant', text: 'Sure! Overall, the students are performing well. Here are some detailed observations and recommendations:' },
    { type: 'assistant', text: '1. Most students have shown significant improvement in their grades over the past semester. Their hard work and dedication are truly commendable.' },
    { type: 'assistant', text: '2. However, there are a few students who need additional support in mathematics and science. They have been struggling with some core concepts that are crucial for their overall understanding.' },
    { type: 'user', text: 'That sounds good. Can you provide specific recommendations for those students who are struggling in mathematics and science?' },
    { type: 'assistant', text: 'Of course. For mathematics, I recommend organizing small group tutoring sessions focused on problem-solving techniques and conceptual understanding. For science, hands-on experiments and visual aids can greatly enhance their learning experience.' },
    { type: 'user', text: 'Thanks for the recommendations. Are there any particular topics within these subjects that they are finding more challenging?' },
    { type: 'assistant', text: 'Yes, in mathematics, topics such as algebra and geometry seem to be particularly challenging for some students. In science, the concepts of physics, especially mechanics and electricity, are proving to be difficult for them.' },
    { type: 'user', text: 'What strategies would you suggest to help them with algebra and geometry?' },
    { type: 'assistant', text: 'For algebra, practice with equations and real-life application problems can be very helpful. For geometry, using visual aids like diagrams and interactive software to visualize shapes and their properties can enhance their understanding.' },
    { type: 'user', text: 'And for physics, how can we make mechanics and electricity easier to grasp?' },
    { type: 'assistant', text: 'In mechanics, hands-on activities such as building simple machines or using physics simulation software can be effective. For electricity, practical experiments with circuits and using visual tools to show how electricity flows can help make these concepts clearer.' },
    { type: 'user', text: 'I will definitely try these strategies. Do you have any other general advice for improving overall student performance?' },
    { type: 'assistant', text: 'Encouraging a growth mindset and providing regular feedback can make a big difference. Also, creating a supportive and engaging classroom environment where students feel comfortable asking questions and expressing their ideas is key.' }
  ]);

  const handleSend = (message) => {
    setMessages([...messages, { type: 'user', text: message }]);
    // Simulate assistant response
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { type: 'user', text: message }, { type: 'assistant', text: 'This is a response from the assistant.' }]);
    }, 1000);
  };

  return (
    <div className="messaging-container">
      <div className="messaging-view">
        <div className="messages">
          {messages.map((msg, index) =>
            msg.type === 'user' ? (
              <UserMessage key={index} message={msg.text} />
            ) : (
              <AssistantMessage key={index} message={msg.text} />
            )
          )}
        </div>
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default MessagingView;
