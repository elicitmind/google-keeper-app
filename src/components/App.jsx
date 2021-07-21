import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function addNote(note) {
    setAllNotes([...allNotes, note]);
    console.log(allNotes);

  }

 

  function handleDelete(id) {
    console.log(id);
   setAllNotes(prevNotes=> {
     return prevNotes.filter((e, index)=>{
       return index !== id
     })
    })
    // setAllNotes(
    //   allNotes.filter((e, index) => {
    //     return id !== index;
    //   })
    // );
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {allNotes.map((e, index) => (
        <Note
          key={index}
          id={index}
          handleDelete={handleDelete}
          title={e.title}
          content={e.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
