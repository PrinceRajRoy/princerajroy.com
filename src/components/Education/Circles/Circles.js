import React from 'react'
import './Circles.css'

function Circles( props ) {
    return (
        <div className={props.class}>
            <div className="Education__timeline--circles"></div>
            <div className="Education__timeline--circles sm"></div>
            <div className="Education__timeline--circles sm"></div>
            <div className="Education__timeline--circles sm"></div>
            <div className="Education__timeline--circles sm"></div>
            <div className="Education__timeline--circles sm"></div>
        </div>
    )
}

export default Circles
