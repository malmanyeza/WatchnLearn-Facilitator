import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import './Header.css';
import { useSubjectContext } from '../hooks/SubjectDetailsContext';

const Header = ({ userName, screenName }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentSubject, setCurrentSubject, mySubjects } = useSubjectContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubjectClick = (subject) => {
    setCurrentSubject(subject);
    setIsDropdownVisible(false);
  };

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="subject-area">
          <div className="subject-dropdown">
            <span>{currentSubject ? currentSubject.subjectName : 'Loading...'}</span>
            <button
              className="dropdown-icon"
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            >
              <FaCaretDown />
            </button>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <div className="dropdown-header">All subjects</div>
                <hr />
                <ul>
                  {mySubjects.map((subject) => (
                    <li
                      key={subject.id} // Assuming each subject has a unique 'id'
                      onClick={() => handleSubjectClick(subject)}
                    >
                      {subject.subjectName}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <span className="screen-name">{screenName}</span>
          </div>
        </div>
        <div className="avatar">{userName.charAt(0).toUpperCase()}</div>
      </div>
    </div>
  );
};

export default Header;
