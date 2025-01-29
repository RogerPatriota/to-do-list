import { useEffect, useState } from 'react';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(tasks)
  }, [tasks])

  function checkTask(taskId) {
    const newTasks = tasks.map(task => {
      if (taskId == task.id){
        if (task.state == 'todo') {
          return {...task, state: 'done'}
        }
        return {...task, state: 'todo'}
      }
      return task
    })
    setTask(newTasks)
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTask(newTasks)
  }

  function addNewTask(title, description) {
    const id = (tasks.at(-1)?.id ?? 0) + 1;
    const newTask = {
      id: id,
      title,
      description,
      state: 'todo'
    };
    setTask([...tasks, newTask])
  }


  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
    <div className='w-[500px] space-y-5'>
      <h1 className='text-3xl text-slate-100 font-bold text-center'>To-Do List</h1>
      <AddTask onAddTask={addNewTask}/>  
      <Tasks tasks={tasks} onTaskClick={checkTask} onDeleteTask={deleteTask}/>
    </div>
  </div>
  )
}


export default App
