import React from 'react'
import './Experience.sass'

function Experience({ where, role, what, duration }) {
    return (
        <div className="Experience">
            <h2 className="Experience__where">{where}</h2>
            <p className="Experience__role">{role}</p>
            <b className="Experience__what">{what}</b>
            <p className="Experience__duration">{duration}</p>
        </div>
    )
}

export default Experience
