import React, { useState } from 'react'

const index = () => {

let [uname, setUname] = useState("Deepak")
const [myclock, setMyclock] = useState(new Date ().toLocaleTimeString());


setInterval(()=>{
  setMyclock(new Date().toLocaleTimeString())
},1000)

const changehandler = () =>{
  console.log("change name")
  setUname(" Deepak Patidar")
}

  return (
    <div>
      <h1>{uname}</h1>
      <h2>{myclock}</h2>
      <button onClick={changehandler}>Change Name</button>
    </div>
  )
}

export default index
