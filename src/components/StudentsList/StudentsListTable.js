import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa'; // Importing FontAwesome ellipsis vertical icon
import './StudentsListTable.css';

const StudentListTable = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showActions, setShowActions] = useState(null);
  const [showHeaderMenu, setShowHeaderMenu] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClass = () => {
    // Implement your delete class logic here
    alert('Delete class functionality will be implemented here.');
  };

  const handleDeleteStudent = (studentId) => {
    // Implement your delete student logic here
    alert(`Delete student ${studentId} functionality will be implemented here.`);
  };

  const handleAddStudent = () => {
    // Implement your add student logic here
    alert('Add student functionality will be implemented here.');
  };

  const handleViewChart = (studentId) => {
    // Implement your view chart logic here
    alert(`View chart for student ${studentId} functionality will be implemented here.`);
  };

  const handleViewAnalysis = (studentId) => {
    // Implement your view analysis logic here
    alert(`View analysis for student ${studentId} functionality will be implemented here.`);
  };

  const handleActionClick = (index) => {
    setShowActions(showActions === index ? null : index);
  };

  const handleHeaderMenuClick = () => {
    setShowHeaderMenu(!showHeaderMenu);
  };

  return (
    <div className="student-list-table">
      <div className="table-header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="actions-bar">
            <button className="add-student-button" onClick={handleAddStudent}>
              Add Student
            </button>
            <div className="header-menu-options">
              <div className="ellipsis-icon-container-header" onClick={handleHeaderMenuClick}>
                <FaEllipsisV className="ellipsis-icon" />
              </div>
              {showHeaderMenu && (
                <div className="header-dropdown-content">
                  <button onClick={handleDeleteClass}>Delete Class</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Student ID</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className={`student-item ${showActions === index ? 'show-actions' : ''}`}>
                <td>{student.name}</td>
                <td>{student.studentId}</td>
                <td className="student-actions">
                  <div className="ellipsis-icon-container" onClick={() => handleActionClick(index)}>
                    <FaEllipsisV className="ellipsis-icon" />
                  </div>
                  {showActions === index && (
                    <div className="actions-menu">
                      <button onClick={() => handleDeleteStudent(student.studentId)}>Delete Student</button>
                      <button onClick={() => handleViewChart(student.studentId)}>View Chart</button>
                      <button onClick={() => handleViewAnalysis(student.studentId)}>View Analysis</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentListTable;
