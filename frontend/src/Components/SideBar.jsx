import classnames from 'classnames';
import { Link ,useLocation } from 'react-router-dom';
import { BsFillBookFill,BsBookmarksFill } from "react-icons/bs";
import { BiAlarmOff,BiLogOut } from "react-icons/bi";
import { MdSubject,MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {useState} from 'react';
function SideBar({subjects,markingSchemes,answerPapers,mcq,clicked}) {
  const currentURL = window.location.href;
  const location = useLocation();
  const pathName = location.pathname.split('/').filter((path) => path !== '')
  const [isClicked,setClick] = useState(false)

  const classes = classnames('flex flex-col pl- justify-center cursor-pointer py-3 hover:bg-white hover:bg-opacity-30 rounded rounded-lg');
  const bottomclasses = classnames('flex flex-col items-center justify-center cursor-pointer py-4');
  const backGroundColor = classnames('bg-white bg-opacity-30 rounded rounded-lg');
  let navbarclasses;

  if(clicked==="outer"){
    navbarclasses = classnames('px-2 text-white font-bold text-center flex flex-col justify-between sidebar w-16 bg-[#4457FF] outer pt-1')
  }else if(clicked==="inner"){
    navbarclasses = classnames('px-2 text-white font-bold text-center flex flex-col justify-between sidebar w-52 bg-[#4457FF] inner pt-1 max-sm:w-14')
  }

  //When logout button clicked
  const handleSubmit = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <div className={navbarclasses}>
      <div className="text-left">
        {subjects && <div className={`${classes} ${clicked === "outer" ? 'items-center': ""} ${pathName[0] === "subjects" ? backGroundColor : ""}`}><Link to="/subjects" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><MdSubject/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>Subjects</div> : ""}</Link></div>}
        {markingSchemes && <div className={`${classes} ${clicked === 'outer' ? 'items-center': ""} ${pathName[0] === "markingSchemes" ? backGroundColor : ""}`}><Link to="/markingschemes" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><BsFillBookFill/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>Marking Schemes</div> : ""}</Link></div>}
        {answerPapers && <div className={`${classes} ${clicked === 'outer' ? 'items-center': ""} ${pathName[0] === "answerPapers" ? backGroundColor : ""}`}><Link to="/answerpapers" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><BiAlarmOff/></div>{clicked==="inner" ?  <div className='ml-1 max-sm:hidden'>Answer Papers</div> : ""}</Link></div>}
        {mcq && <div className={`${classes} ${clicked === 'outer' ? 'items-center': ""} ${pathName[0] === "mcq" ? backGroundColor : ""}`}><Link to="/mcq" className='flex items-center'><div className='ml-1 block text-3xl pr-1'><BsBookmarksFill/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>MCQ</div> : ""}</Link></div>}
      </div>
      <div className={bottomclasses}>
        <div className='w-full'>
          <Link to="/profile" className={`flex hover:bg-white hover:bg-opacity-30 rounded rounded-lg items-center w-full py-3 ${clicked === 'outer' ? 'justify-center': 'justify-right'}`}><div className='ml-1 block text-3xl pr-1'><CgProfile/></div>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>Profile</div> : ""}</Link>
          {/* <Link to="/settings" className='shadow shadow-gray-600 flex justify-center hover:bg-sky-300 w-full py-4'>{clicked==="inner" ? <div className='ml-1 max-sm:hidden'>Settings</div> : <div className='ml-1 block text-3xl pr-1'><MdSettings/></div>}{clicked==="inner" ? <div className='mr-1 max-sm:block sm:hidden text-3xl'><MdSettings/></div> : ""}</Link> */}
          <button onClick={handleSubmit} className={`flex hover:bg-white hover:bg-opacity-30 rounded rounded-lg items-center w-full py-3 ${clicked === 'outer' ? 'justify-center': 'justify-right'}`}><div className='ml-1 block text-3xl pr-1'><BiLogOut/></div>{clicked==="inner" ? <div className=' ml-1 max-sm:hidden'>Logout</div> : ""}</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar;
