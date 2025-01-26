import { useNavigate, useSearchParams } from "react-router-dom"
import { CircleArrowLeft } from "lucide-react"

function TaskPage() {
    const navigate = useNavigate()
    const [seacrhParams] = useSearchParams()
    const title = seacrhParams.get("title")
    const description = seacrhParams.get("description")

    return (
        <div className="h-screen w-screen flex justify-center bg-slate-500 p-6">
            <div className='w-[600px] space-y-5'>
                <div className="flex justify-center relative">
                    <button
                        onClick={() => {navigate('/')}}
                        className="absolute left-0 top-3 bottom-0 text-slate-200">
                        <CircleArrowLeft />
                    </button>
                    <h1 className='text-3xl text-slate-100 font-bold text-center'>To-Do List</h1>

                </div>
                
                <div className="bg-slate-300 p-4 m-8 flex flex-col gap-3 rounded-md text-slate-700">
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage