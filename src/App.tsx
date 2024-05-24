import { SetStateAction, useState } from "react"
import Contact from "./components/Contact"
import Cover from "./components/Cover"

const App = () => {
  const [lang, setLang] = useState("en")
  const [mode, setMode] = useState("dark")


  const changeLang = (v: SetStateAction<string>, title: string) => {
    window.document.title = `${title}`;
    setLang(v)
  }

  return (
    <main className={` min-h-screen ${mode=="dark"?"bg-[#313030]":"bg-[#e0dede]"}`}>

      {
        lang == "en" ?
          (
            <button
              className={`absolute text-2xl font-semibold  bg-[#44bdc5] rounded-full outline-none h-14 w-14 top-6 right-6`}
              onClick={() => {

                changeLang("ar", "أحمد محمد")
              }}>Ar</button>
          ) :
          (
            <button
              className="absolute text-2xl font-semibold text-white bg-[#44bdc5] rounded-full outline-none h-14 w-14 top-6 right-6"
              onClick={() => {
                changeLang("en", "Ahmed Mphame")
              }}>En</button>
          )
      }
      {
        mode == "dark" ?
          (<button className="absolute top-6 left-6" onClick={() => { setMode("light") }}><img src="light.png" className="w-10 " alt="" /></button>) :
          (<button className="absolute top-6 left-6" onClick={() => { setMode("dark") }}><img src="dark.png" className="w-10 " alt="" /></button>)
      }

      <Cover lang={lang} mode={mode}/>
      <Contact lang={lang} mode={mode}/>
    </main>
  )
}

export default App
