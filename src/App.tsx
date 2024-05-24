import { useState } from "react"
import Contact from "./components/Contact"
import Cover from "./components/Cover"

const App = () => {
  const [lang,setLang]= useState("en")

  return (
    <main className="bg-[#313030] min-h-screen">
      <button onClick={()=>{
        setLang("ar")
      }}>Lang</button>
      <Cover lang={lang} />
      <Contact/>
    </main>
  )
}

export default App
