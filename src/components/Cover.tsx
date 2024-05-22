import { personData } from "../data"

const Cover = () => {
    return (
        <div className=" w-full p-4 bg-gray-600 rounded-t-3xl flex flex-col items-center justify-center">
            <img src={personData.logo} alt="Ahmed Mohamed image" className="w-32 hover:scale-110 duration-300 cursor-grabbing" />
            <h1 className="py-3 capitalize text-2xl">
                {personData.name}</h1>
            <div className="flex justify-between items-center gap-1 text-center w-full py-3">
                <span className="text-sm capitalize text-slate-200 hover:bg-slate-500 px-4 py-1 rounded-3xl flex-1 duration-500 transition-colors">
                    {personData.position}</span>
                <span className="text-sm capitalize text-slate-200 hover:bg-slate-500 px-4 py-1 rounded-3xl flex-1 cursor-pointer 
                duration-500 transition-colors">{personData.phone}</span>
            </div>
        </div>
    )
}

export default Cover
