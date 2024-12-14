// src/components/Assessments.js
import React from 'react';
import Header from '../Header';
import AssessmentsTable from './AssessmentsTable';

const Assessments = () => {

// dummyData.js

const students = [
    { id: 1, name: 'Alice Johnson', marks: [85, 90, 78, 88, 92, 85, 80, 91] },
    { id: 2, name: 'Bob Smith', marks: [75, 85, 70, 78, 82, 80, 70, 81] },
    { id: 3, name: 'Charlie Brown', marks: [95, 98, 89, 94, 96, 97, 93, 95] },
    { id: 4, name: 'Diana Prince', marks: [65, 70, 60, 68, 72, 65, 60, 71] },
    { id: 5, name: 'Ethan Hunt', marks: [80, 85, 75, 88, 89, 82, 78, 85] }
  ];


const assessments = [
    'Exercise 1',
    'Test 1',
    'Exercise 2',
    'Test 2',
    'Exercise 3',
    'Test 3',
    'Exercise 4',
    'Test 4'
  ];
  


    return (
        <div>
             <Header currentSubject="English" userName="John Doe" screenName="Assessments" />
                <AssessmentsTable students={students} assessments={assessments}/>
        </div>
    );
};

export default Assessments;
