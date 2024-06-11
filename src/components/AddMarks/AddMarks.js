// src/components/AddMarks.js
import React from 'react';
import Header from '../Header';

const AddMarks = () => {
    return (
        <div>
             <Header currentSubject="English" userName="John Doe" screenName="Add Marks" />
            <p>This is where you can add marks for students.</p>
        </div>
    );
};

export default AddMarks;
