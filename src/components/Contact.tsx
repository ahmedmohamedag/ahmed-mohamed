import { contactData } from "../data"

const Contact = () => {
    return (
        <section >
            <h2 className="py-5 font-semibold text-center text-white sm:text-2xl">You can communicate with me by :</h2>
            <div className="grid grid-cols-2 mx-auto sm:grid-cols-4 justify-items-center md:w-[500px] py-5">

                {
                    contactData.map((link, index) => (
                        <a href={link.url}
                            key={index}
                            className="flex items-center justify-center p-2 my-2 rounded-full w-fit"
                            target="_blank">
                            <img src={link.logo} alt="" className="duration-300 w-14 hover:scale-125" />
                        </a>
                    ))
                }
            </div>
        </section>
    )
}
export default Contact
