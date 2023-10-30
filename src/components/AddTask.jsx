import React from 'react'
import { editText } from '../redux/action'
function Addtask(prop) {
  return (
    <div className='input-container'><input type="text" onChange={(e)=>prop.dispatch(editText(e.target.value,prop.id))}/></div>
  )
}

export default Addtask