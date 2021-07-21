import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton onClick={() => props.handleDelete(props.id)}><DeleteForeverIcon /></IconButton>
    </div>
  );
}

export default Note;
