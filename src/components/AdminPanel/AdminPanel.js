// src/components/AdminPanel.js
import React from 'react';
import Header from '../Header';

const AdminPanel = () => {
    return (
        <div>
             <Header currentSubject="English" userName="John Doe" screenName="Admin Panel" />
            <p>This is the admin panel.</p>
        </div>
    );
};

export default AdminPanel;
