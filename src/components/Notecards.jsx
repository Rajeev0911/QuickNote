import React from 'react'

const Notecards = (props) => {
    return (
        props.cards.map(card => {
            return (
                <div className="card border-dark m-3" style={{ maxWidth: "18rem" }}>
                    <div className="card-header" id='cardHeader'>{card.sno}</div>
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.notes}</p>
                    </div>
                    <div className="card-footer" id='cardFooter'></div>
                </div>
            )
        })
    )
}

export default Notecards