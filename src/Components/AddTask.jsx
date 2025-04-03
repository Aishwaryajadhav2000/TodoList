import React from 'react'

function AddTask({ todolist, setlist, task, editlists }) {

  const addTask = (tsk) => {
    tsk.preventDefault();
  

    if (task.id) {
      const date = new Date()
      const edittask = todolist.map((todo) => (
        todo.id === task.id ? {
          id: task.id, 
          name: task.name, 
          tasksts: task.tasksts,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()} `
        } : todo
      ))
      setlist(edittask)
      editlists({})

    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(), name: tsk.target.todoname.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        tasksts: tsk.target.tsksts.value
      }
      setlist([...todolist, newTask]);
      editlists({})
   
    }
  }


  return (
    <section className='addtask'>
      <form action="" onSubmit={addTask} className='addtaskform'>

        <section className='formsec'>
          <input type="text" name="todoname" placeholder='Add Your New Task' className='adtaskinput'
            value={task.name || ""} 
            onChange={tsk => editlists({ ...task, name: tsk.target.value })} />

          <select name="tsksts" id="" className='selectsts' value={task.tasksts || " "}
            onChange={tsk => editlists({ ...task, tasksts: tsk.target.value })}>
            <option value="No Status">Select Status</option>
            <option value="ToDo">ToDo</option>
            <option value="Pending">Pending</option>
            <option value="Complete">Complete</option>
            <option value="In Progress">In Progress</option>
            <option value="On Hold">On Hold</option>
            <option value="Cancelled">Cancelled</option>
            <option value="In Review">In Review</option>
            <option value="Testing">Testing</option>
          </select>
          <button className='addtaskbtn' type='submit'>{task.id ? "Update" : "Add"}</button>
        </section>


      </form>
    </section>
  )
}


export default AddTask
