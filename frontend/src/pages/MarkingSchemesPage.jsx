import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import MarkingSchemes from '../Components/MarkingSchemes/MarkingSchemes'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
function MarkingSchemesPage() {
  const { year,subjectId} = useParams()
  const allItems=JSON.parse(localStorage.getItem('token'));
  const user_id=allItems['_id'];
  const [isClicked,setClick] = useState("outer");
  const [markingScheme,setMarkingScheme] = useState([]);

  const name=`${subjectId}---- ${year} ---Marking Scheme`
  // useEffect(()=>{
  //   fetchMarkingScheme();
  // },[]);

  // const fetchMarkingScheme = async () =>{
  //   try{
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${allItems['token']}`,
  //       },
  //     }
  //     const response = await axios.get(`http://localhost:5000/api/markingschemes/${subjectId}`,config);
  //     const data = response.data;
  //     setMarkingScheme(data);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // //Function to handle the click of the hamburger menu
  const handleClick = () => {
    if(isClicked==="outer"){
    setClick("inner")
    }else{
    setClick("outer")
    }
  }

  return (
    <div>
      <NavBar black onClickFunc={handleClick}/>
      <SideBar mcq subjects markingSchemes answerPapers clicked={isClicked}/>
      <MarkingSchemes clicked={isClicked} data="hello"/>
      
    </div>
  )
}

export default MarkingSchemesPage