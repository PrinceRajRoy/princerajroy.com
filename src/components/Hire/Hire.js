import React from 'react'
import './Hire.sass'

function Hire() {
    return (
        <div className="Hire">
            <div className="Hire__title">Hire Me</div>
            <label htmlFor="name" className="Hire__label">Name *</label>
            <input id="name" type="text" className="Hire__input"/>
            <label htmlFor="email" className="Hire__label">Email *</label>
            <input id="email" type="email" className="Hire__input"/>
            <label htmlFor="message" className="Hire__label">Message *</label>
            <textarea id="message" type="text" className="Hire__input" />
            <button className="Hire__btn">SUBMIT</button>
        </div>
    )
}

export default Hire
