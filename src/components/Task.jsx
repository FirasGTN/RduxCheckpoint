import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {AiOutlineCheckCircle,AiFillEye} from "react-icons/ai"
import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs'
import {ImCancelCircle} from 'react-icons/im'
import { check,uncheck,delet,edit,editText, add, filterdone, filterundone } from '../redux/action'
import { useDispatch } from 'react-redux'
import {MdOutlineFilterListOff,MdOutlineFilterList} from 'react-icons/md'
import Addtask from './AddTask'

function Task() {
  const dispatch = useDispatch()
  const {tasks} = useSelector((store)=>store);
  const [Newtask , setNewtask] = useState("")
  return (
    <div className='container'>
      <div className='add-task'>
        <input type="text"  onChange={(e)=>setNewtask(e.target.value)}/>
        <button onClick={()=>dispatch(add(Newtask))} className='bt-add'>Add </button>
        <MdOutlineFilterList size={30} onClick={()=>dispatch(filterdone())}/>
        <MdOutlineFilterListOff size={30} onClick={()=>dispatch(filterundone())}/>
      </div>
      {tasks.map((tasks)=>(
      <div className='task-container'>
        {tasks.isDone ? 
          <div  className='task' style={{borderColor: 'rgb(74, 255, 74)'}}>
          <h2>{tasks.description}</h2>
          <div className='test'>
          {tasks.show ? 
            <Addtask dispatch={dispatch} id ={tasks.id}/>:tasks.show
          }
          <div className='task-body'>
            <AiFillEye className='eye-bt' size={28} />
            <BsFillPencilFill className='pen-bt' size={25} onClick={()=>{dispatch(edit(tasks.id))}}/>
            <BsFillTrashFill className='trash-bt' size={25} onClick={()=>{dispatch(delet(tasks.id))}}/>
            <ImCancelCircle className='check-bt' size={30} onClick={()=>{dispatch(uncheck(tasks.id))}}/>
          </div>
          </div>
        </div> 
          : 
          tasks.isDone === undefined ? 
          <div  className='task' style={{borderColor: '#c4c4c4'}}>
            <h2>{tasks.description}</h2>
            <div className='test'>

            {tasks.show ? 
            <Addtask dispatch={dispatch} id ={tasks.id}/>:tasks.show
          }
            <div className='task-body'>
              <AiFillEye className='eye-bt' size={28} />
              <BsFillPencilFill className='pen-bt' size={25} onClick={()=>{dispatch(edit(tasks.id))}}/>
              <BsFillTrashFill className='trash-bt' size={25} onClick={()=>{dispatch(delet(tasks.id))}}/>
              <AiOutlineCheckCircle className='undefindCheck-bt' size={32}  onClick={()=>{dispatch(check(tasks.id))}}/>
            </div>
          </div>  
          </div>
          : 
          <div  className='task' style={{borderColor: 'red'}}>
            <h2>{tasks.description}</h2>
            <div className='test'>
            {tasks.show ? 
            <Addtask dispatch={dispatch} id ={tasks.id}/>:tasks.show
          }
            <div className='task-body'>
              <AiFillEye className='eye-bt' size={28} />
              <BsFillPencilFill className='pen-bt' size={25} onClick={()=>{dispatch(edit(tasks.id))}}/>
              <BsFillTrashFill className='trash-bt' size={25} onClick={()=>{dispatch(delet(tasks.id))}}/>
              <AiOutlineCheckCircle className='uncheck-bt' size={32} onClick={()=>{dispatch(check(tasks.id))}}/>
            </div>
            </div>
          </div> 
        }
      </div>
      ))}
    </div>
  )
}

export default Task