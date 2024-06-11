// src/components/Overview.js
import React from 'react';
import Header from '../Header';
import MessagingView from './MessagingView';

const Overview = () => {
    return (
        <div>
            <Header currentSubject="English" userName="John Doe" screenName="Overview" />
            <MessagingView />
        </div>
    );
};

export default Overview;
