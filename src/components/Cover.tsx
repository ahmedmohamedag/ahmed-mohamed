import { personData } from "../data"
const Cover = () => {
    return (
        <div className="flex flex-col py-5 shadow-2xl place-items-center">
            <img src={personData.logo} alt="Ahmed Mohamed image" className="duration-300 w-52 hover:scale-110 cursor-grabbing" />
            <h2 className="pt-4 text-2xl text-white"><span className="text-3xl text-emerald-400">A</span>hmed  <span className="text-3xl text-emerald-400">M</span>ohamed</h2>
            <span className="text-[#d3cdcd]">Frontend Developer</span>
        </div>
    )
}
export default Cover
