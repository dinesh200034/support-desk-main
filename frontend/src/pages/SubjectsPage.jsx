import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import Subjects from '../Components/Subjects'
import {useEffect, useState} from 'react'
import axios from 'axios'
function SubjectsPage() {
  const allItems=JSON.parse(localStorage.getItem('token'));
  const user_id=allItems['_id'];
  const [isClicked,setClick] = useState("outer");
  const [subjects,setSubjects] = useState([]);

  useEffecr(()=>{
    fetchSubjects();
  },[]);

  const fetchSubjects = async () =>{
    try{
      const response = await axios.get(`http://localhost:5000/api/subjects:${user_id}`);
      const data = response.data;
      setSubjects(data);
    }catch(error){
      console.log(error);
    }
  }

  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];
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
      <Subjects clicked={isClicked} data={data}/>
    </div>
  )
}

export default SubjectsPage
