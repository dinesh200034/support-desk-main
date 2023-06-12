import { AiOutlineMenu } from "react-icons/ai";
import classnames from 'classnames';
import Logo from '../photos/logo.png'
function NavBar({white,black,onClickFunc}) {
    const classes = classnames('text-3xl cursor-pointer',{
        'text-white':white,
        'text-black':black
    });
  return (
    <nav className="flex items-center justify-between shadow shadow-gray-500 h-14 py-3 px-4 ">
        <AiOutlineMenu className={classes} onClick={onClickFunc}/>
        <img className='w-52' src={Logo} alt="Logo"/>
    </nav>
  )
}

export default NavBar
