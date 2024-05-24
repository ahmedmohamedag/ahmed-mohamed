import { personData } from "../data"
interface I_Props{
    lang:string,
}
const Cover = ({lang}:I_Props) => {
    return (
        <div className="flex flex-col py-5 shadow-2xl place-items-center">
            <img src={personData.logo} alt="Ahmed Mohamed image" className="duration-300 w-52 hover:scale-110 cursor-grabbing" />
            
                {
                    lang =="en" ? (<h2 className="pt-4 text-2xl text-white"><span className="text-3xl text-emerald-400">A</span>hmed  <span className="text-3xl text-emerald-400">M</span>ohamed </h2>):
                    (<h2 className="pt-4 text-2xl text-white">احمد محمد</h2>)
                }

                {
                    lang =="en" ? (<span className="text-[#d3cdcd]">Frontend Developer</span>):
                    (<span className="text-[#d3cdcd]">مطور مواقع</span>)
                }
            
        </div>
    )
}
export default Cover
