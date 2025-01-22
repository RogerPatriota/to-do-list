import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  return (
    <div>
      <h1 className='text-blue-500 text-3xl'>To - Do list</h1>
      <Tasks/>
      <AddTask/>
    </div>
  )
}


export default App
