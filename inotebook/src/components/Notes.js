import React, { useContext, useEffect } from 'react'
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem"
// import NoteState from '../context/notes/noteState';

function Notes() {
  const context = useContext(noteContext);
  const { notes , getNotes} = context;
  useEffect(()=>{
    getNotes()
  },[])
  return (
    <>
      {/* <Addnote/> */}
      <div className='row my-3'>
        <h3>Your notes</h3>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} /> 
        })}
      </div>
    </>
  )
}

export default Notes