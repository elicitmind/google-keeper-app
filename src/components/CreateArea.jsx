import React, { useState } from "react";

function CreateArea(props) {
  // const [allNotes, setAllNotes] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleContent(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleTitle(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  // function clearInput() {
  //   note.title = "";
  //   note.content = "";
  // }

  function handleSubmit(event) {
    props.addNote(note);

    event.preventDefault();
    setNote({
      title: "",
      content: ""
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleContent}
          value={note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
