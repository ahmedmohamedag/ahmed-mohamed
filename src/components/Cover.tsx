import { personData } from "../data"
interface I_Props{
    lang:string,
    mode:string,
    
}
const Cover = ({lang,mode}:I_Props) => {
    return (
        <div className={`flex flex-col py-5 shadow-md  place-items-center ${mode=="dark"?"text-white":"text-black"}`}>
            <img src={personData.logo} alt="Ahmed Mohamed image" className="duration-300 w-52 hover:scale-110 cursor-grabbing" />
            
                {
                    lang =="en" ? (<h2 className="pt-4 text-2xl "><span className="text-3xl text-emerald-400">A</span>hmed  <span className="text-3xl text-emerald-400">M</span>ohamed </h2>):
                    (<h2 className="pt-4 text-2xl ">احمد محمد</h2>)
                }

                {
                    lang =="en" ? (<span className={` ${mode=="dark"?"text-[#eee]":"text-[#020202]"}`}>Frontend Developer</span>):
                    (<span className={`${mode=="dark"?"text-[#ffff]":"text-[#020202]"}`}>مطور مواقع</span>)
                }
            
        </div>
    )
}
export default Cover
