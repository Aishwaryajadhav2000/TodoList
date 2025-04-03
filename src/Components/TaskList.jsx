import React from 'react'

function TaskList({ todolist, setlist, task, editlists }) {
    // console.log("todolist", todolist)
    const completedtask = todolist.filter(task => task.tasksts === "Complete").length
    const Pendingtask = todolist.filter(task => task.tasksts === "Pending").length
    const ToDotask = todolist.filter(task => task.tasksts === "ToDo").length
    const InProgresstask = todolist.filter(task => task.tasksts === "In Progress").length
    const Cancelledtask = todolist.filter(task => task.tasksts === "Cancelled").length
    const OnHoldtask = todolist.filter(task => task.tasksts === "On Hold").length
    const Testingtask = todolist.filter(task => task.tasksts === "Testing").length
    const InReviewtask = todolist.filter(task => task.tasksts === "In Review").length

    function edittask(id) {
        const edittasks = todolist.find(task => task.id === id);
        editlists(edittasks)
        console.log("edited", editlists)
        // deletetask(id)
    }
    function deletetask(id) {
        const deleteconfirmation = window.confirm(`Are you sure.. You want to deete the Task ?`);
        if (deleteconfirmation) {
            const newtodolist = todolist.filter(task => task.id !== id);
            setlist(newtodolist);
        }
    }

    function clearAll() {
        const confirmation = window.confirm("Are you sure.. You want to delete all Tasks?");
        if (confirmation) {
            window.location.reload()
        }
    }

    return (
        <section className='tasklist'>
            <header className={`${todolist.length === 0 ? "notasks" : "showtask"}`}>
                <div className='tasksstslength'>
                    <span>Total Tasks : {todolist.length}</span>

                    <span className={`${completedtask.length === 0 ? "notasks" : ""}`}>Completed : {completedtask}</span>

                  

                    <span className={`${Pendingtask.length === 0 ? "notasks" : ""}`}>Pending : {Pendingtask}</span>
                    <span>ToDo : {ToDotask}</span>
                    <span>In Progress : {InProgresstask}</span>
                    <span>Cancelled : {Cancelledtask} </span>
                    <span>In Review : {InReviewtask} </span>
                    <span>Testing : {Testingtask} </span>
                    <span>On Hold : {OnHoldtask} </span>

                </div>
                <button onClick={clearAll} className='clrall'>Clear All</button>
            </header>

            <article>

                <section className='tasklistcard'>
                    {todolist.map((task) => (
                        <article key={task.id}>
                            <p>
                                <span className='taskname'>{task.name}</span>
                                <br />
                                {/* <button className='taskstsbtn ' >
                                    {task.tasksts} 
                                </button> */}
                                <button className={`taskstsbtn ${task.tasksts == "Complete" ? "complete"
                                    : task.tasksts == "ToDo" ? "ToDo"
                                        : task.tasksts == "No Status" ? "NoStatus"
                                            : task.tasksts == "Pending" ? "Pending"
                                                : task.tasksts == "In Progress" ? "InProgress"
                                                    : task.tasksts == "Cancelled" ? "Cancelled"
                                                        : task.tasksts == "In Review" ? "InReview"
                                                            : task.tasksts == "Testing" ? "Testing"
                                                                : task.tasksts == "On Hold" ? "OnHold"
                                                                    : "inactive"}`}>
                                    {task.tasksts}
                                </button>
                                <hr />
                                <span>Date - {task.time}</span>
                                <br /><br />

                                <div className='editbtns'>
                                    <span><button onClick={() => edittask(task.id)} className='editbtn'>Edit</button></span>

                                    <span><button onClick={() => deletetask(task.id)} className='dtlbtn'>Delete</button></span>

                                </div>


                            </p>


                        </article>
                    ))}

                </section>

            </article>


        </section>
    )
}

export default TaskList