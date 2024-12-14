import React, { useState, useEffect } from 'react';
import AssistantMessage from './MessagingView/AssistantMessaging'
import UserMessage from './MessagingView/UserMessage';
import MessageInput from './MessagingView/MessagingInput';
import './MessagingView.css';

const MessagingView = () => {
  
  const [messages, setMessages] = useState([
    { type: 'user', text: 'Hi, I’ve just uploaded the latest marks for my Chemistry class. Can you give me some detailed feedback on how my students are performing?' },
    { type: 'assistant', text: 'Hi Malvern! Sure, here’s a comprehensive overview. Yolanda is performing exceptionally well. She’s been consistently scoring above 90%. Make sure to acknowledge her hard work.' },
    { type: 'user', text: 'Will do. How about the students who need more attention?' },
    { type: 'assistant', text: 'Charmaine and John need some attention. Charmaine’s marks have been steadily declining. She started strong, but her recent scores are concerning. John shows inconsistent performance—sometimes scoring very high, but other times his marks drop significantly. This might be due to inconsistent study habits.' },
    { type: 'user', text: 'I see. Any particular topics they’re struggling with?' },
    { type: 'assistant', text: 'Yes, both seem to be struggling with chemical equations and stoichiometry. They’re having trouble balancing equations and understanding mole concepts.' },
    { type: 'user', text: 'What strategies do you recommend to help them?' },
    { type: 'assistant', text: 'For chemical equations, consider small group tutoring sessions focused on practice problems and step-by-step guides. Interactive simulations can help with visualizing stoichiometry.' },
    { type: 'assistant', text: 'Additionally, pairing students with complementary strengths and weaknesses can be beneficial. For example, Yolanda excels in chemical equations and could help Charmaine, while John, who shows strong practical skills, could work with Sarah, who needs support in lab work. This can help them understand the importance of teamwork and how different strengths can complement each other.' },
    { type: 'user', text: 'That’s a great idea. How can I go about pairing them effectively?' },
    { type: 'assistant', text: 'Identify each student’s strengths and weaknesses. Pair them so that one student’s strength can support the other’s weakness. Set clear goals for each pair and monitor their progress. Encourage them to communicate openly and provide feedback on their experience.' },
    { type: 'user', text: 'Got it. Any other trends I should be aware of?' },
    { type: 'assistant', text: 'Attendance has been generally good, but a few students, like Sarah and Michael, have missed several classes. This might be impacting their performance.' },
    { type: 'user', text: 'I’ll check in with them to see if there are any issues.' },
    { type: 'assistant', text: 'Good idea. Also, students like Alex and Sam have shown significant improvement in their participation. They’re asking more questions and engaging in discussions, which is great for their learning.' },
    { type: 'user', text: 'I’ve noticed that too. I’ll make sure to encourage them further.' },
    { type: 'assistant', text: 'Overall, maintaining a balance of support and challenge is key. Keep providing positive reinforcement and constructive feedback. Creating a supportive environment where students feel comfortable expressing their difficulties can also boost performance.' },
    { type: 'user', text: 'Absolutely. Thanks for all the detailed feedback. This really helps me understand where to focus my efforts.' },
    { type: 'assistant', text: 'You’re welcome, Malvern! Glad to help. If you need any more insights or assistance, feel free to ask.' },
    { type: 'user', text: 'I’ll definitely reach out. Thanks again!' },
    { type: 'assistant', text: 'Anytime, Malvern! Good luck with your class.' }
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
