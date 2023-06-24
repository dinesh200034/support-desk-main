import { MdSubject,MdSettings } from "react-icons/md";
import { IoNewspaperOutline ,IoStatsChart } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import classnames from 'classnames';
import { Link ,useLocation } from 'react-router-dom';
function AdminSidebar({clicked}) {
  const location = useLocation();
  const pathName = location.pathname.split('/').filter((path) => path !== '')
  const classes = classnames('flex flex-col pl-1 justify-center cursor-pointer py-3 hover:bg-white hover:bg-opacity-30 rounded rounded-lg my-2');
  const backGroundColor = classnames('bg-white bg-opacity-30 rounded rounded-lg');
  return (
    <div>
      <div className={`${classes} ${clicked === "outer" ? 'items-center': ""} ${pathName[1] === "dashboard" ? backGroundColor : ""}`}><Link to="/admin/dashboard" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><IoStatsChart/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>Dashboard</div> : ""}</Link></div>
      <div className={`${classes} ${clicked === "outer" ? 'items-center': ""} ${pathName[0] === "subjects" ? backGroundColor : ""}`}><Link to="/subjects" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><MdSubject/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>Subjects</div> : ""}</Link></div>
      <div className={`${classes} ${clicked === "outer" ? 'items-center': ""} ${pathName[0] === "teachers" ? backGroundColor : ""}`}><Link to="/subjects" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><GiTeacher/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>Teachers</div> : ""}</Link></div>
    </div>
  )
}

export default AdminSidebar
