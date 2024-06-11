// src/components/StudentsList.js
import React from 'react';
import Header from '../Header';
import StudentsListTable from './StudentsListTable';

const StudentsList = () => {

    const dummyStudents = [
        { id: 1, name: 'John Doe', studentId: 'A001' },
        { id: 2, name: 'Jane Smith', studentId: 'A002' },
        { id: 3, name: 'Emily Johnson', studentId: 'A003' },
        { id: 4, name: 'Michael Brown', studentId: 'A004' },
        { id: 5, name: 'Sarah Davis', studentId: 'A005' },
        { id: 6, name: 'David Wilson', studentId: 'A006' },
        { id: 7, name: 'Jessica Garcia', studentId: 'A007' },
        { id: 8, name: 'Daniel Martinez', studentId: 'A008' },
        { id: 9, name: 'Emma Anderson', studentId: 'A009' },
        { id: 10, name: 'James Thomas', studentId: 'A010' },
        { id: 11, name: 'Sophia Lee', studentId: 'A011' },
        { id: 12, name: 'Aiden Taylor', studentId: 'A012' },
        { id: 13, name: 'Olivia White', studentId: 'A013' },
        { id: 14, name: 'Liam Harris', studentId: 'A014' },
        { id: 15, name: 'Isabella Clark', studentId: 'A015' },
        { id: 16, name: 'Mason Rodriguez', studentId: 'A016' },
        { id: 17, name: 'Mia Lewis', studentId: 'A017' },
        { id: 18, name: 'Lucas Walker', studentId: 'A018' },
        { id: 19, name: 'Amelia Hall', studentId: 'A019' },
        { id: 20, name: 'Ethan Allen', studentId: 'A020' },
      ];

    return (
        <div>
             <Header currentSubject="English" userName="John Doe" screenName="Students List" />
            <StudentsListTable students={dummyStudents}/>
        </div>
    );
};

export default StudentsList;
