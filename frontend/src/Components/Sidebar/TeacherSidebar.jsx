import { MdSubject,MdSettings } from "react-icons/md";
import { BsFillBookFill,BsBookmarksFill } from "react-icons/bs";
import { BiAlarmOff,BiLogOut } from "react-icons/bi";
import { IoNewspaperOutline ,IoStatsChart } from "react-icons/io5";
import classnames from 'classnames';
import { Link ,useLocation } from 'react-router-dom';
function TeacherSidebar({clicked}) {
  const location = useLocation();
  const pathName = location.pathname.split('/').filter((path) => path !== '')
  const classes = classnames('flex flex-col pl-1 justify-center cursor-pointer py-3 hover:bg-white hover:bg-opacity-30 rounded rounded-lg my-2');
  const backGroundColor = classnames('bg-white bg-opacity-30 rounded rounded-lg');
  return (
    <div>
        <div className={`${classes} ${clicked === "outer" ? 'items-center': ""} ${pathName[1] === "dashboard" ? backGroundColor : ""}`}><Link to="/teacher/dashboard" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><IoStatsChart/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>Dashboard</div> : ""}</Link></div>
        <div className={`${classes} ${clicked === "outer" ? 'items-center': ""} ${pathName[0] === "subjects" ? backGroundColor : ""}`}><Link to="/subjects" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><MdSubject/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>Subjects</div> : ""}</Link></div>
        <div className={`${classes} ${clicked === 'outer' ? 'items-center': ""} ${pathName[0] === "markingschemes" ? backGroundColor : ""}`}><Link to="/markingschemes" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><BsFillBookFill/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>Marking Schemes</div> : ""}</Link></div>
        <div className={`${classes} ${clicked === 'outer' ? 'items-center': ""} ${pathName[0] === "answersheets" ? backGroundColor : ""}`}><Link to="/answersheets" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><IoNewspaperOutline/></div>{clicked==="inner" ?  <div className='ml-1 max-sm:hidden'>Answer Papers</div> : ""}</Link></div>
        <div className={`${classes} ${clicked === 'outer' ? 'items-center': ""} ${pathName[0] === "mcq" ? backGroundColor : ""}`}><Link to="/mcq" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><BiAlarmOff/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>MCQ</div> : ""}</Link></div>
    </div>
  )
}

export default TeacherSidebar
