import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import './Skill.sass'

function Skill({ icon, desc }) {

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
                    {desc}
                </div>
        </animated.div>
    )
}

export default Skill
