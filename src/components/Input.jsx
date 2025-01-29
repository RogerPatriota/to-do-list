

function Input(props) {
    return (
        <>
            <input 
                {...props}
                className={`py-2 px-4 border-2 border-slate-300 outline-slate-300 rounded-md ${
                    props.onFieldErr ? "border-2 border-red-500 placeholder-red-300" : ''
                }`} 
            />
        </>

    )
}

export default Input