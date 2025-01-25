import { useState } from "react"

function AddTask(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [err, setErr] = useState("")

    const handleSubmit = () => {
        if (!title.trim() || !description.trim()) {
            setErr("Both fields required")
            return
        }
        setErr("")
        props.onAddTask(title, description)
        setTitle("")
        setDescription("")
    }

    return (
        <div className="space-y-4 mt-5 p-6 flex flex-col bg-slate-200 rounded-2xl shadow">
            <input required type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter the title"
                className="py-2 px-4 border-2 border-slate-300 outline-slate-400 rounded-md" 
            />
            <input type="text" required
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Enter the description" 
                className="py-2 px-4 border-2 border-slate-300 outline-slate-400 rounded-md"
            />
            {err && (<div className="text-center font-bold text-red-600">{err}</div>)}
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-slate-500 rounded-md text-white font-medium">Submit</button>
        </div>
    )
}

export default AddTask