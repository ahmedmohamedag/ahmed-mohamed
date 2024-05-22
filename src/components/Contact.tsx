import { contactData } from '../data'

const Contact = () => {
    return (
        <div className=" w-full mt-5 py-10  grid sm:grid-cols-3 grid-cols-2  justify-items-center">
            {
                contactData.map((link, index) => (
                    <a href={link.url}
                        key={index}
                        className="
                            w-fit 
                            duration-700
                            rounded-full
                            flex items-center justify-center p-2 my-2
                            hover:bg-gray-500 
                            sm:even:bg-gray-500 
                            sm:even:hover:bg-gray-700 
                            "
                        target="_blank">
                        <img src={link.logo} alt="" className="w-14" />
                    </a>
                ))
            }
        </div>
    )
}
export default Contact
