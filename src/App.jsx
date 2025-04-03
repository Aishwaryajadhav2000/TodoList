import './App.css'
import Header from './Components/Header'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import { useState } from 'react'


function App() {
  const [todolist, setlist] = useState([]);
  const [task , editlists] = useState({})

  return (
    <>
     <Header></Header>
     <AddTask todolist={todolist} setlist={setlist} task={task} editlists={editlists}></AddTask>
     <TaskList todolist={todolist} setlist={setlist} task={task} editlists={editlists}></TaskList>
    </>
  )
}

export default App
