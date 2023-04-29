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
    <li key={task.id} className='form-control d-flex space-between w-25'>
{task.title}
<i onClick={()=>DeleteHandler(task.id)}

className="text-danger ri-delete-bin-2-line"
>
 
</i>
    </li>
  ))
}

  return (
    <div className='container bg-light p-5 mt-5'>
      <h1 className='bg-warning text-center'>Todo list </h1>
      <form onSubmit={createTaskHandler}>
        <input
         type="text" 
         value={title}
         placeholder='Title'
         onChange={(e)=>setTitle(e.target.value)}
         className='form-control w-50 mb-3'
         />
          <input
         type="text" 
         value={desc}
         placeholder='desc'
         onChange={(e)=>setDesc(e.target.value)}
         className='form-control w-50 mb-3'
         />
         <button className='btn btn-primary'>Create Task</button>
      </form>
      <hr />
      <ul>
    {taskslist}
      </ul>
    </div>
  )
}

export default index