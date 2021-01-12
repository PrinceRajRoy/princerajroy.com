import { animated, useSpring } from 'react-spring'
import './Skill.sass'

const calc = (x, y, height, width) => [-(y - height / 2) / 20, (x - width / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Skill({ icon, title, desc }) {

    const [props, setProps] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40} }))

    return (
        <animated.div 
            className="Skill" 
            onMouseMove={({ clientX: x, clientY: y, target }) => {setProps({ xys: calc(x, y, target.offsetHeight, target.offsetWidth) })}}
            onMouseLeave={() => setProps({ xys: [0, 0, 1]})}
            style={{ transform: props.xys.interpolate(trans) }}>
                <img className="Skill__icon" src={icon} alt="Skill-icon"/>
                <div className="Skill__icon--bg"></div>
                <h3 className="Skill__title">{title}</h3>
                <div className="Skill__desc--container">
                    <div className="Skill__desc">{desc}</div>
                </div>
        </animated.div>
    )
}

export default Skill
