import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa'; // Importing FontAwesome caret down icon
import './Header.css';

const Header = ({ currentSubject, userName, screenName }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subjects = ['English', 'Biology', 'Chemistry', 'Physics'];

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="subject-area">
          <div className="subject-dropdown">
            <span>{currentSubject}</span>
            <button className={"dropdown-icon"} onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
              <FaCaretDown /> {/* Using the imported icon here */}
            </button>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <div className="dropdown-header">All subjects</div>
                <hr />
                <ul>
                  {subjects.map((subject) => (
                    <li key={subject}>{subject}</li>
                  ))}
                </ul>
              </div>
            )}
            <span className={'screen-name'} >{screenName}</span>
          </div>
          
        </div>
        <div className="avatar">{userName.charAt(0).toUpperCase()}</div>
      </div>
    </div>
  );
};

export default Header;
