import React, { useState } from 'react';
import './App.css'
function ToDoList(props) {


  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("myTodoLists")
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  const [newTask, setNewtask] = useState({ title: "", check: false })
  function handleInputTask(event) {
    setNewtask(n => ({ ...n, title: event.target.value }))

  }
  function addTask() {
    if (newTask.title.trim() !== "") {

      setTasks([...tasks, newTask])
      setNewtask({title:''})
      localStorage.setItem("myTodoLists", JSON.stringify([...tasks, newTask]));
      console.log(localStorage.getItem("myTodoLists"))
    }
  }
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
    localStorage.setItem("myTodoLists", JSON.stringify(tasks.filter((_, i) => i !== index)));

  }
  function moveTaskUp(index) {
    if (index !== 0) {
      [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]]
      setTasks([...tasks])
      localStorage.setItem("myTodoLists", JSON.stringify([...tasks]));

    }

  }
  function moveTaskDown(index) {
    if (index !== tasks.length - 1) {
      [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]]
      setTasks([...tasks])
      localStorage.setItem("myTodoLists", JSON.stringify([...tasks]));

    }
  }

  function removeUser() {
    localStorage.removeItem('name');
    localStorage.removeItem('welcomeBoolean');
    localStorage.removeItem('myTodoLists');
    props.setWelcomeFalse()
  }

  function checkBoxFn(index) {
    const updatedArr = tasks.map((item, i) => {
      if (index === i) {
        item.check = !item.check
      }
      return item;
    })
    setTasks([...updatedArr])
    localStorage.setItem("myTodoLists", JSON.stringify([...updatedArr]));
  }

  function KeyPressed(evt){
    if(evt.key ==='Enter' && newTask.title.length > 2){
      addTask()
    }
  }

  return (
    <>
      <h2>{props.name}'s To-do-list</h2>
      <div className="center-div">
        <input
          id="inputTag"
          type='text'
          placeholder='Add a new task...'
          value={newTask.title}
          onChange={handleInputTask}
          onKeyDown={KeyPressed}
        />

        <button className="add-button" onClick={addTask}>Add Task</button>

      </div>
      <div className="content-div">
        <ol className='hover-list'>

          {tasks.length > 0 ?
            tasks.map((task, index) =>
              <li onClick={() => checkBoxFn(index)} key={index}>
                <label className="checkbox-container">
                  <input onChange={() => checkBoxFn(index)} type="checkbox" checked={task.check} />
                  <span className="checkmark"></span>

                </label>
                <span className={task.check ? 'checked-text text' : 'text'}>  {task.title}  </span>
                <button className='move-button' onClick={() => moveTaskUp(index)}><i className="fa-solid fa-arrow-up"></i></button>
                <button className='move-button' onClick={() => moveTaskDown(index)}><i className="fa-solid fa-arrow-down"></i></button>
                <button className='delete-button' onClick={() => deleteTask(index)}><i className="fa-solid fa-trash"></i></button>
              </li>) :
            <h3>No tasks available</h3>
          }

        </ol>
      </div>
      <p className='removeUser' onClick={removeUser}> <i className="fas fa-user-times"></i> Remove existing user </p>
    </>
  )
}


export default ToDoList