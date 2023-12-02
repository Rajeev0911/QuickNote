import React from 'react';

const Notecards = (props) => {

    return (
        props.cards.map(card => {
            return (
                <div className="card border-dark m-3" key={props.sno} style={{ maxWidth: "18rem" }}>
                    <div className="card-header" id='cardHeader'><h5>{card.sno}</h5></div>
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.notes}</p>
                    </div>
                    <div className="card-footer" id='cardFooter'>
                        <span className="material-symbols-outlined" onClick={card.deleteNote} style={{ cursor: "pointer" }}>
                            delete
                        </span>
                    </div>
                </div>
            )
        })
    )
}

export default Notecards