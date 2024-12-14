import React, { useState } from 'react';
import './AddMarksTable.css';

const AddMarksTable = ({ students }) => {
  const [marksData, setMarksData] = useState({});
  const [totalMark, setTotalMark] = useState('');
  const [assignmentType, setAssignmentType] = useState('');
  const [subjectTopic, setSubjectTopic] = useState('');

  const handleMarksChange = (studentId, value) => {
    setMarksData({
      ...marksData,
      [studentId]: value
    });
  };

  const handleSaveMarks = () => {
    const marksPercentage = students.map(student => ({
      name: student.name,
      percentage: ((marksData[student.id] / totalMark) * 100).toFixed(2)
    }));
    console.log('Assignment Type:', assignmentType);
    console.log('Subject Topic:', subjectTopic);
    console.log('Marks in Percentage:', marksPercentage);
    alert('Marks saved successfully!');
    setMarksData({});
    setTotalMark('');
    setAssignmentType('');
    setSubjectTopic('');
  };

  return (
    <div className="marks-entry-container">
      <div className="data-table-container">
        <div className="header-inputs">
          <input
            type="text"
            placeholder="Enter total mark"
            value={totalMark}
            onChange={(e) => setTotalMark(e.target.value)}
            className="total-marks-input"
          />
          <select
            value={assignmentType}
            onChange={(e) => setAssignmentType(e.target.value)}
            className="assignment-type-input"
          >
            <option value="">Select type</option>
            <option value="exercise">Exercise</option>
            <option value="test">Test</option>
          </select>
          <input
            type="text"
            placeholder="Enter topic"
            value={subjectTopic}
            onChange={(e) => setSubjectTopic(e.target.value)}
            className="subject-topic-input"
          />
        </div>
        <table className="students-data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>
                  <input
                    type="number"
                    value={marksData[student.id] || ''}
                    onChange={(e) => handleMarksChange(student.id, e.target.value)}
                    placeholder="Enter marks"
                    className="student-marks-input"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="save-action-container">
          <button className="save-marks-action-button" onClick={handleSaveMarks}>
            Save Marks
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMarksTable;
