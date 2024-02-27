import React,{useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

const Form = ({ input, setInput, tasks, setTasks, editTask,setEditTask}) => {

  const updateTask=({title,id,completed}) => {
    const newTask= tasks.map(task => task.id === id ? {title,id,completed} :task)
    setTasks(newTask)
    setEditTask('') 
  }
  useEffect(() =>{
    if(editTask && !editTask.completed){
      setInput(editTask.title)
    }else{
      setInput("")
    }
  },[setInput,editTask]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!editTask) {
      setTasks([...tasks, { id: uuidv4(), title: input, completed: false }]);
      setInput("")
    }else{
      updateTask({...editTask,title: input})
    }
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" className='text-input' value={input} onChange={(e)=>{setInput(e.target.value)
}} required />
        <button className='btn-add' type='submit'>{(editTask && !editTask.completed)?"Edit":"Add"}</button>
      </form>
      
    </>
  )
}

export default Form
