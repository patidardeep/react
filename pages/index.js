import Create from '@/components/Create'
import Show from '@/components/Show'
import { useState } from 'react'

const index = () => {

const [tasks, setTasks] = useState([])

  return (
    <div>
      <h1>todo appp</h1>
      <Create tasks={tasks} setTasks={setTasks}>
bahut hi jada  imp information
      </Create>
      <hr />
      <Show tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default index