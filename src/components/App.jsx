import React from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import notes from "../notes.js"

function App() {
    return <div>
        <Header />
        {notes.map(props=><Note {...props} key={props.key} />)}
        <Footer />
    </div>
}

export default App