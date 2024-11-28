import React , {useState} from "react"
import WelcomePage from './WelcomePage.jsx'
import ToDoList from "./ToDoList.jsx"

function App() {
   const [welcome , setWelcome] = useState(localStorage.getItem('welcomeBoolean'))
   const [name , setName] = useState(localStorage.getItem('name'))

   function toggleWelcome(){
      const name = localStorage.getItem('name')
      if(name.length > 1){
         localStorage.setItem('welcomeBoolean',true)
         setWelcome(true)
         setName(name)
      }else{

      }
   
      
   }

   function setWelcomeFalse(){
      setWelcome(false)
   }
   return (
      <>  

     { !welcome || welcome == false ?( <WelcomePage onClickFunction={toggleWelcome}/> ) :( <ToDoList name={name} setWelcomeFalse={setWelcomeFalse}/>)}

      </>
   )
}

export default App
