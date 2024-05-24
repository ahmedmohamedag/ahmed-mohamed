import { contactData } from "../data"
interface I_Props{
    lang:string,
}
const Contact = ({lang}:I_Props) => {
    return (
        <section >
            {
                lang == "en"?(<h2 className="py-5 text-xl font-semibold text-center text-white sm:text-2xl">You can communicate with me by :</h2>):
                (
                    <h2 className="py-5 text-xl font-semibold text-center text-white sm:text-2xl">يمكنك التواصل معي بما يناسبك </h2>
                )
            }
            <div className="grid grid-cols-2 mx-auto sm:grid-cols-4 justify-items-center md:w-[500px] py-5">

                {
                    contactData.map((link, index) => (
                        <a href={link.url}
                            key={index}
                            className="flex items-center justify-center p-2 my-2 rounded-full w-fit"
                            >
                            <img src={link.logo} alt="" className="duration-300 w-14 hover:scale-125" />
                        </a>
                    ))
                }
            </div>
        </section>
    )
}
export default Contact
