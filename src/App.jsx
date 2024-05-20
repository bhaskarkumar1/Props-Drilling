import React, { createContext } from "react"
import ChildA from "./assets/Components/ChildA"

// create , provider, consumer
let data=createContext()
let data2=createContext()
function App() {
let name="Bhaskar"
let age=23
  return (
    <>
      <data.Provider value={name}>

        <data2.Provider value={age}>
            <ChildA/>
        </data2.Provider>

      </ data.Provider>
    </>
  )
}

export default App

export {data,data2}