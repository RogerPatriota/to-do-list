function AddTask(props) {
    return (
        <div className="space-y-4 mt-5 p-6 flex flex-col bg-slate-200 rounded-2xl shadow">
            <input type="text" 
                placeholder="Enter the title" 
                className="py-2 px-4 border-2 border-slate-300 outline-slate-400 rounded-md" 
            />
            <input type="text" 
                placeholder="Enter the description" 
                className="py-2 px-4 border-2 border-slate-300 outline-slate-400 rounded-md"
            />
            <button
                className="px-4 py-2 bg-slate-500 rounded-md text-white font-medium">Submit</button>
        </div>
    )
}

export default AddTask