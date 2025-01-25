import { useState } from 'react';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTask] = useState([
    {
      id: 1,
      title: 'Study React',
      description: 'Watch the youtube class',
      state: 'todo'
    },
    {
      id: 2, 
      title: 'Work Out',
      description: 'Go to the Gym',
      state: 'todo'
    }
  ]);

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


  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
    <div className='w-[500px] space-y-5'>
      <h1 className='text-3xl text-slate-100 font-bold text-center'>To-Do List</h1>
      <AddTask/>  
      <Tasks tasks={tasks} onTaskClick={checkTask} onDeleteTask={deleteTask}/>
    </div>
  </div>
  )
}


export default App
