import React from 'react'
import './Experience.sass'

function Experience({ where, role, what, duration }) {
    return (
        <div className="Experience">
            <h2 className="Experience__where">{where}</h2>
            <div className="Experience__role">{role}</div>
            <div className="Experience__what">{what}</div>
            <div className="Experience__duration">{duration}</div>
        </div>
    )
}

export default Experience
