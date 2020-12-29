import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import './Skill.sass'

function Skill({ icon, title, desc, subtitle, subdesc }) {

    const [hover, setHover] = useState(false)

    const props = useSpring({
        transform: hover ? "translate(4px, -4px)" : "translate(0px, 0px)",
        config: {
            tension: 500,
            friction: 18
        }
    })

    return (
        <animated.div 
            className="Skill" 
            style={props}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
                <img className="Skill__icon" src={icon} alt="Skill-icon"/>
                <div className="Skill__desc">
                    <h3 className="Skill__title">{title}</h3>
                    <div className="Skill__desc1">{desc}</div>
                    <h4 className="Skill__subtitle">{subtitle}</h4>
                    <div className="Skill__desc2">{subdesc}</div>
                </div>
        </animated.div>
    )
}

export default Skill
