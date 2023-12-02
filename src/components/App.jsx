import React, { useState } from 'react';
import Addnote from './Addnote';
import Notecards from './Notecards';


export default function App() {

  const [sno, setSno] = useState(1);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [cards, setCards] = useState([]);


  //Function to handle the submit event
  function handleSubmit(e) {
    e.preventDefault();
  }


  // Function to generate serial number
  function serialNumber(){
    setSno(sno + 1)
  }


  //Function to add note
  function addNote() {
    setCards(currentCard => {
      return [...currentCard, { sno: sno, title: title, notes: notes }]
    });
    setTitle("");
    setNotes("");
    serialNumber(); //Invoking the serialNumber function to add serial numbers to each note cards

    //Alerting the user on clicking the button without filling the input
    if ( !title || !notes ) {
      alert("Fill out both the inputs to make a note.");
      setCards([]);
      setSno(1); //To not increase the count of the serial numbers when the user clicks on add notes button without filling the inputs. It sets the value of sno again to 1 if the inputs are empty and the user clicked the add note button
    }
  }


  //Function to delete a note
  function deleteNote(){
    return cards.filter(card => {
      return card.sno == 0;
    })
  };


  //Function to clear the text
  function clearText() {
    setTitle("");
    setNotes("");
  }


  return (
    <>
      <h1 className='text-center'>Note Making App</h1>
      <div className='container bg-body-tertiary p-3'>
        <h3>Add Notes Here:</h3>
        <Addnote handleSubmit={handleSubmit} addNote={addNote} clearText={clearText} title={title} setTitle={setTitle} notes={notes} setNotes={setNotes} />
      </div>
      <div className='container py-3'>
        <h3>Your Notes:</h3>
        <div className='bg-warning-subtle p-5'>
          {(cards.length === 0) ? <h6>Add notes...</h6> : <Notecards cards={cards} deleteNote={deleteNote}/>}
        </div>
      </div>
    </>
  )
}