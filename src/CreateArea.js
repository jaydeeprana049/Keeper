import React, { useState } from "react";
import "./styles1.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="container">
      <form className="form-box">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          className="input"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          className="textarea"
        />
        <button onClick={submitNote} className="button">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
