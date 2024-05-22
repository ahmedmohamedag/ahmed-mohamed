import Contact from "./Contact"
import Cover from "./Cover"
const About = () => {
    return (
        <section className="bg-slate-700  w-[400px] flex items-center flex-col rounded-3xl text-white text-xl ">
            <Cover />
            <Contact />
        </section>
    )
}

export default About
