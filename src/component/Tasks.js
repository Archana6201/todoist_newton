import React, { useState } from "react";

const AddTasks = ({ onCancel, onAddTask }) => {
    const [task, settask] = useState("");
    return (
        <div className="task-dialogue">
         <input value={task} onChange={(event) => settask(event.target.value)}/>
          <div className="task-btn-action-container">
          <div className="btn-task-action">
            <button className="Add-btn" 
            onClick={() => {
                onAddTask(task);
                onCancel();
                settask("");
                }}>
            Add task</button>
            <button className="cancel-btn" onClick={() => { 
                onCancel();
                settask("");
            }} 
            >cancel</button>
          </div>
          <div className="btn-calender"></div>
        </div>
        </div>
    )
}


const Tasks = () => {
    const [showAddTask, setshowAddTask] = useState(false);
    const [tasks, settasks] = useState([]);

     const addNewTask = (text) => {
         settasks((pervState) => [...pervState, text]);
     }
  return (
    <div className="tasks">
      <h1>Inbox</h1>
      <div className="add-task-btn" onClick={() => setshowAddTask((pervState) => !pervState)}>
        <span className="plus">+</span>
        <span className="add-task-text">Add task</span>
      </div>
      {showAddTask && <AddTasks onAddTask={addNewTask} onCancel={() => setshowAddTask(false)} />}
      {tasks.length > 0 ?  tasks.map((task) => <p>{task}</p>) : <p>No Task added</p>}
    </div>
  );
};

export default Tasks;
