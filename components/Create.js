import { nanoid } from 'nanoid'
import{ useState } from 'react'

const Create = (props) => {
  console.log(props);
  const {tasks,setTasks} = props

const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")

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
    
  return (
    <>
    {props.children}
<form onSubmit={createTaskHandler}>
<input
 type="text" 
 placeholder='Title'
 value={title}
 onChange={(e)=>setTitle(e.target.value)}
 />

<input
 type="text" 
 placeholder='Desc'
 value={desc}
 onChange={(e)=>setDesc(e.target.value)}
 />

<button className='btn btn-primary'>Create Task</button>

</form>
    </>
  )
}

export default Create