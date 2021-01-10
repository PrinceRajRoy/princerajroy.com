import { useState } from 'react'
import './Skill.sass'

function Skill({ icon, title, desc, subtitle, subdesc }) {

    const [hover, setHover] = useState(false)

    return (
        <div className="Skill" >
            <img className="Skill__icon" src={icon} alt="Skill-icon"/>
            <div className="Skill__desc">
                <h3 className="Skill__title">{title}</h3>
                <div className="Skill__desc1">{desc}</div>
                <h4 className="Skill__subtitle">{subtitle}</h4>
                <div className="Skill__desc2">{subdesc}</div>
            </div>
        </div>
    )
}

export default Skill
