import './App.css';
import React from "react";
import Menu from "./Components/Menu";
import Api from "./Components/menuApi";
import {useState} from "react";
import {Navbar} from './Components/Navbar';


function App() {

  const uniqueList = ["All", ...new Set(Api.map((ele)=>{
    return ele.category;
  }))];

  // const abc = (()=>{

  //   Api.filter((el)=>{
  //     console.log(el.category);
  //     return el.category;
  //   })

 

  // })

  // console.log(abc);

  const filteredFun = ((cat)=>{

    if(cat === "All"){
      
       return setMenuData(Api);
      
    }
  
     else{ const updatedList =  Api.filter((e)=>{ return e.category === cat; })

     return setMenuData(updatedList);
    
  }
    })

  

 const [menuData,setMenuData] = useState(Api);
//  const [uniquemenuData,setUniqueMenuData] = useState(uniqueList);
  return (
    <>

      <Navbar  unique = {uniqueList} filter = {filteredFun}/> 

    <Menu data = {menuData}/>
   
   
    </>
  );
}

export default App;
