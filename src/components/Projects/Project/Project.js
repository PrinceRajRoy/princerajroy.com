import React from 'react'
import './Project.sass'

function Project({ active, title, image, desc, link}) {
    return (
        <div>
            <div className={`Project ${active ? "Project__active" : ""}`}>
                <img className="Project__image" src={image} alt={title} />
                <div className="Project__title">{title}</div>
                <p className="Project__desc">{desc}</p>
                <a className="Project__link" href={link} target="_blank" rel="noopener noreferrer">
                    Find More
                </a>
            </div>
        </div>
    )
}

export default Project
