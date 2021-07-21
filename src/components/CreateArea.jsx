import React, { useState } from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [isFocused, setFocus] = useState(false)
  // const [allNotes, setAllNotes] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  function handleNoteChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    props.addNote(note);

    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  function handleTextAreaFocus() {
    setFocus(true)
  }

  // function handleContent(event) {
  //   const { name, value } = event.target;
  //   setNote((prevValue) => {
  //     return {
  //       ...prevValue,
  //       [name]: value
  //     };
  //   });
  // }

  // function handleTitle(event) {
  //   const { name, value } = event.target;
  //   setNote((prevValue) => {
  //     return {
  //       ...prevValue,
  //       [name]: value
  //     };
  //   });
  // }

  // function clearInput() {
  //   note.title = "";
  //   note.content = "";
  // }


  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isFocused && <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleNoteChange}
          autoFocus
        />}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isFocused? "3" : "1"}
          onChange={handleNoteChange}
          value={note.content}
          onFocus={handleTextAreaFocus}
        />
        <Zoom in={isFocused && true}>
          <Fab type="submit"><NoteAddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
