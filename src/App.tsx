import { SetStateAction, useState } from "react"
import Contact from "./components/Contact"
import Cover from "./components/Cover"

const App = () => {
  const [lang, setLang] = useState("en")
  const changeLang = (v: SetStateAction<string>,  title: string) => {
    // window.document.dir = `${dir}`;
    window.document.title = `${title}`;
    setLang(v)
  }
  return (
    <main className="bg-[#313030] min-h-screen">

      {
        lang == "en" ?
          (
            <button
              className="absolute text-2xl font-semibold text-white bg-[#44bdc5] rounded-full outline-none h-14 w-14 top-6 right-6"
              onClick={() => {
                
                changeLang("ar",  "أحمد محمد")
              }}>Ar</button>
          ) :
          (
            <button
              className="absolute text-2xl font-semibold text-white bg-[#44bdc5] rounded-full outline-none h-14 w-14 top-6 right-6"
              onClick={() => {
                changeLang("en", "Ahmed Mphame" )
              }}>En</button>
          )
      }
      <Cover lang={lang} />
      <Contact lang={lang} />
    </main>
  )
}

export default App
