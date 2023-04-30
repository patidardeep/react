import React from 'react'

const Show = (props) => {
    const{tasks,setTasks} = props;
    const DeleteHandler = (id) => {
        const copyTasks = tasks.filter((task) => task.id !== id);
        setTasks(copyTasks);
    };

let taskslist = (
    <h4>no pending task....</h4>
)
if(tasks.length>0){
    taskslist = tasks.map((task,index)=>(
        <li key = {task.id}>
            {task.title}
<i
onClick={() => DeleteHandler(task.id)}
className="text-danger ri-delete-bin-2-line"
></i>
        </li>
    ))
}


  return (
    <div>
        <ul>
            {taskslist}
        </ul>
    </div>
  )
}

export default Show;