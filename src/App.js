import './App.css';
import AddMarks from './components/AddMarks/AddMarks';
import Assessments from './components/Assessments/Assessments';
import NavBar from './components/Navbar/Navbar';
import Overview from './components/Overview/Overview';
import StudentsList from './components/StudentsList/StudentsList';
import AdminPanel from './components/AdminPanel/AdminPanel';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Colors from './constants/Colors';


const App = () => {
  return (
      <Router>
          <div className="app">
              <NavBar />
              <div className="content" 
                style={{ backgroundColor: Colors.screensBackground }}
               >
                  <Routes>
                      <Route path="/" element={<Overview />} />
                      <Route path="/students-list" element={<StudentsList />} />
                      <Route path="/add-marks" element={<AddMarks />} />
                      <Route path="/assessments" element={<Assessments />} />
                      <Route path="/admin-panel" element={<AdminPanel />} />
                  </Routes>
              </div>
          </div>
      </Router>
  );
};

export default App;