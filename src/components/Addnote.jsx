import React from 'react'

const Addnote = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label"><h5>Title:</h5></label>
                    <input value={props.title} type="text" className="form-control" id="title" onChange={e => props.setTitle(e.target.value)} placeholder="Add a title" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><h5>Write Notes:</h5></label>
                    <textarea value={props.notes} className="form-control" id="notes" rows="3" onChange={e => props.setNotes(e.target.value)} placeholder='Write your notes here'></textarea>
                </div>
                <div>
                    <button type="button" onClick={props.addNote} className='btn btn-success'>Add Note</button>
                    <button type="button" onClick={props.clearText} className="btn btn-outline-warning ms-3">Clear Text</button>
                </div>
            </form >
        </>
    )
}

export default Addnote