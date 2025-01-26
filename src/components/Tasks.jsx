import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Tasks(props) {
    const navigate = useNavigate()

    function onSeeDetails(task) {
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-2xl shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-3">
                    <button
                        onClick={() => props.onTaskClick(task.id)} 
                        className={`bg-slate-400 font-bold text-left text-white w-full p-2 pl-5 rounded-md ${
                            task.state == 'done' ? "bg-slate-700 line-through text-opacity-50" : ''
                        }`}
                    >
                        {task.title}
                    </button>
                    <button
                        onClick={() => {onSeeDetails(task)}}
                        className="bg-slate-400 p-2 text-white rounded-md">
                            <ChevronRightIcon/>
                    </button>
                    <button
                        onClick={() => props.onDeleteTask(task.id)}
                        className="bg-red-400 p-2 rounded-md text-back hover:bg-red-500"
                    >
                        <Trash2Icon/>
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks