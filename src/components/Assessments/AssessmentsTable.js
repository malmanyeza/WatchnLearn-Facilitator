import React from 'react';
import './AssessmentsTable.css';

const AssessmentsTable = ({ students, assessments }) => {
  return (
    <div className="assessments-table">
      <div className="table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              {assessments.map((assessment, index) => (
                <th key={index} className="slanted">
                  {assessment}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                {student.marks.map((mark, index) => (
                  <td key={index}>{mark}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssessmentsTable;
