import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "default" })
  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag);
  }
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className='container my-3'>
        <h3>Add a note</h3>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onchange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onchange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" onChange={onchange} minLength={5} required/>
          </div>
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>

      </div>

    </div>
  )
}

export default Addnote
