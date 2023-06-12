import { Route, Routes } from 'react-router-dom';
import TopBar from "./Components/TopBar";
import QuestionsPage from "./Pages/QuestionsPage";
import EssayPage from './Pages/EssayPage';
import McqPage from './Pages/McqPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
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
        <Route path="/mcq" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
