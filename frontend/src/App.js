import { Route, Routes } from 'react-router-dom';
import EssayPage from './Pages/EssayPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import SubjectsPage from './Pages/SubjectsPage';
import SubjectPage from './Pages/SubjectPage';
import './Components/TopBar.css';

function App(){
  return(
    <div className='h-full'>
      {/* <TopBar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/essayPage" element={<EssayPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/mcq" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
