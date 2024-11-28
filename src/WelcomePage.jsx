import React , {useState} from "react";

function WelcomePage(props){
  
  const [name , setName] = useState('')

  function changeName(evt){
    setName(evt.target.value)
    localStorage.setItem('name', evt.target.value);
  }

  function KeyPressed(evt){
    if(evt.key ==='Enter'){
      props.onClickFunction()
    }
  }

  return(
    <div >
      <div className="welcome-heading">
      <h2>Welcome to your Task Scheduler</h2>
    </div>
        <div className="content-div">
        <input onKeyDown={KeyPressed} id="nameInput" placeholder='What should we call you???' type="text" onChange={changeName} value={name} />
        </div>

        <div className="content-div">
        {/* <button className="continue-button" onClick={props.onClickFunction}> Continue </button> */}
        </div>

    </div>
  )
}

export default WelcomePage