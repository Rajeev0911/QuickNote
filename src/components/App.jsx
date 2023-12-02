import React, { useState } from 'react'
import Addnote from './Addnote';
import Notecards from './Notecards';


export default function App() {

  const [sno, setSno] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [cards, setCards] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()
  }

  function addNote() {
    setCards(currentCard => {
      return [...currentCard, { sno: sno, title: title, notes: notes }]
    })
    setTitle("");
    setNotes("");
  }

  function clearText() {
    setTitle("");
    setNotes("");
  }

  function serialNumber() {
    for (let i = 0; i < sno; i++) {
      setSno = i;
    }
  }
  serialNumber();

  return (
    <>
      <h1 className='text-center'>Note Making App</h1>
      <div className='container bg-body-tertiary p-3'>
        <h3>Add Notes Here:</h3>
        <Addnote handleSubmit={handleSubmit} addNote={addNote} clearText={clearText} title={title}
          setTitle={setTitle} notes={notes} setNotes={setNotes} />
      </div>
      <div className='container py-3'>
        <h3>Your Notes:</h3>
        <div className='bg-warning-subtle p-5'>
          <Notecards sno={sno} cards={cards} />
        </div>
      </div>
    </>
  )
}

