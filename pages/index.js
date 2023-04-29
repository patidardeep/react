import React, { useState } from 'react'

const index = () => {

let [uname, setUname] = useState("Deepak")


const changehandler = () =>{
  console.log("change name")
  setUname(" Deepak Patidar")
}

  return (
    <div>
      <h1>{uname}</h1>
      <button onClick={changehandler}>Change Name</button>
    </div>
  )
}

export default index
