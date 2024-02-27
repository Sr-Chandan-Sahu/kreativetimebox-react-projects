import React from 'react'

const TodoList = ({ tasks, setTasks, setEditTask }) => {
  const handleComplete = (task) => {
    setTasks(tasks.map(item => {
      return item.id === task.id ? { ...item, completed: !item.completed } : item
    }))
  }
  const handleEdit = ({ id }) => {
    const findTask = tasks.find(task => task.id === id)
    setEditTask(findTask)
  }

  const handleDelete = ({ id }) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div>
      {tasks.map(task => (
        <li className='list-items' key={task.id}>
          <input
            type="text"
            value={task.title}
            className={`list ${task.completed ? "completed":""}`}
            onChange={e => e.preventDefault()}
          />
          <div>
            <button className='btn-complete ' onClick={() => handleComplete(task)}>
              <i className="bi bi-check-circle-fill"></i>
            </button>
            <button className='btn-edit ' onClick={() => handleEdit(task)}>
              <i className="bi bi-pencil-square"></i>
            </button>
            <button className='btn-delete ' onClick={() => handleDelete(task)}>
              <i className="bi bi-trash3-fill"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodoList
