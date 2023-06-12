import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import {useState} from 'react'
function Dashboard() {

  const [isClicked,setClick] = useState("outer")

  //Function to handle the click of the hamburger menu
  const handleClick = () => {
    if(isClicked==="outer"){
    setClick("inner")
    }else{
    setClick("outer")
    }
    // console.log(isClicked)
  }

  return (
    <div>
      <NavBar black onClickFunc={handleClick}/>
      <SideBar mcq subjects markingSchemes answerPapers clicked={isClicked}/>
    </div>
  )
}

export default Dashboard
