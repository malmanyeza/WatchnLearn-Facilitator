import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaListAlt, FaPlusCircle, FaClipboardList, FaCog } from 'react-icons/fa'; // Importing icons from react-icons
import './Navbar.css';
import Colors from '../../constants/Colors';

const NavBar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <div className="navbar" style={{ backgroundColor: Colors.navbarBackground }}>
      <div className='app-name' style={{ color: Colors.navigationText }}>App Title</div>
      <hr />
      <ul>
        <li>
          <Link
            to="/"
            className={selected === '/' ? 'selected' : ''}
            style={selected === '/' ? { color: Colors.selectedNavigationText } : { color: Colors.navigationText }}
            onClick={() => setSelected('/')}
          >
            <FaHome style={{ marginRight: '10px' }} /> Overview
          </Link>
        </li>
        <li>
          <Link
            to="/students-list"
            className={selected === '/students-list' ? 'selected' : ''}
            style={selected === '/students-list' ? { color: Colors.selectedNavigationText } : { color: Colors.navigationText }}
            onClick={() => setSelected('/students-list')}
          >
            <FaListAlt style={{ marginRight: '10px' }} /> Students List
          </Link>
        </li>
        <li>
          <Link
            to="/add-marks"
            className={selected === '/add-marks' ? 'selected' : ''}
            style={selected === '/add-marks' ? { color: Colors.selectedNavigationText } : { color: Colors.navigationText }}
            onClick={() => setSelected('/add-marks')}
          >
            <FaPlusCircle style={{ marginRight: '10px' }} /> Add Marks
          </Link>
        </li>
        <li>
          <Link
            to="/assessments"
            className={selected === '/assessments' ? 'selected' : ''}
            style={selected === '/assessments' ? { color: Colors.selectedNavigationText } : { color: Colors.navigationText }}
            onClick={() => setSelected('/assessments')}
          >
            <FaClipboardList style={{ marginRight: '10px' }} /> Assessments
          </Link>
        </li>
        <li>
          <Link
            to="/admin-panel"
            className={selected === '/admin-panel' ? 'selected' : ''}
            style={selected === '/admin-panel' ? { color: Colors.selectedNavigationText } : { color: Colors.navigationText }}
            onClick={() => setSelected('/admin-panel')}
          >
            <FaCog style={{ marginRight: '10px' }} /> Admin Panel
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
