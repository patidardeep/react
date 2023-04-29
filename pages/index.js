import { nanoid } from 'nanoid'
import  { useState } from 'react'

const index = () => {

const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")
const [tasks, setTasks] = useState([])



const createTaskHandler = (e) => {
  e.preventDefault();
  const todo = {
    id:nanoid(),
    title,
    desc,
  }
  console.log(todo)
  setTasks([...tasks,todo])
  setTitle("")
  setDesc("")
}

const DeleteHandler = (id) => {
  const copyTasks = tasks.filter((task)=>task.id !==id)
  setTasks(copyTasks);
}

let taskslist = (
  <h4>no pending task....</h4>
)
if(tasks.length>0){
  taskslist = tasks.map((task,index)=>(
    <li key={task.id}>
{task.title}
<i onClick={()=>DeleteHandler(task.id)}

className="text-danger ri-delete-bin-2-line"
>
 
</i>
    </li>
  ))
}

  return (
    <div>
      <form onSubmit={createTaskHandler}>
        <input
         type="text" 
         value={title}
         placeholder='Title'
         onChange={(e)=>setTitle(e.target.value)}
         />
          <input
         type="text" 
         value={desc}
         placeholder='desc'
         onChange={(e)=>setDesc(e.target.value)}
         />
         <button>Create Task</button>
      </form>
      <hr />
      <ul>
    {taskslist}
      </ul>
    </div>
  )
}

export default index