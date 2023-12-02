import React, { useState } from 'react'


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
        return [...currentCard, {sno: sno, title: title, notes: notes}]
      })
      setTitle("");
      setNotes("");
    }

    function clearText(){
      setTitle("");
      setNotes("");
    }

     function serialNumber(){
      for (let i = 0; i < sno; i++) {
        setSno = i;
      }
    }
    serialNumber();



  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1 className='text-center'>Note Making App</h1>
      <div className='container bg-body-tertiary p-3'>
        <h3>Add Notes Here:</h3>
        <div className="mb-3">
          <label className="form-label"><h5>Title:</h5></label>
          <input value={title} type="text" className="form-control" id="title" onChange={e => setTitle(e.target.value)} placeholder="Add a title" />
        </div>
        <div className="mb-3">
          <label className="form-label"><h5>Write Notes:</h5></label>
          <textarea value={notes} className="form-control" id="notes" rows="3" onChange={e => setNotes(e.target.value)} placeholder='Write your notes here'></textarea>
        </div>
        <div>
          <button type="button" onClick={addNote} className='btn btn-success'>Add Note</button>
          <button type="button" onClick={clearText} className="btn btn-outline-warning ms-3">Clear Text</button>
        </div>
      </div>
      </form>

      <div className='container py-3'>
        <h3>Your Notes:</h3>
        <div className='bg-warning-subtle p-5'>

          {cards.map(card => {
            return (
              <div className="card border-dark m-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header" id='cardHeader'>{card.sno}</div>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.notes}</p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </>

  )
}

