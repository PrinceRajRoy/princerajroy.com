import { useEffect, useState } from 'react';
import './Nav.sass';
import { useSpring, animated, config } from 'react-spring';
import gsap from 'gsap'
import { Power4 } from 'gsap/gsap-core';

function Nav() {

    const [active, setActive] = useState(false)
    const [current, setCurrent] = useState(0)

    const props = useSpring({
        width: active ? `520px` : '48px',
        config: active ? config.wobbly : config.stiff
    })

    /* Scroll To The Clicked Nav Item Section */
    const scroll = (target) => {
        target = document.getElementsByClassName(target)[0]
        window.scrollTo(target.offsetLeft, target.offsetTop - (window.innerWidth > 799 ? 60 : 40))
    }
    
    useEffect(() => {
        const t1 = gsap.timeline({ paused: true })
        t1.fromTo(".Nav__item", {
            x: "20px",
            opacity: 0
        }, {
            x: "0px",
            opacity: 1,
            stagger: 0.1,
            ease: Power4.easeOut,
            delay: 0.3
        })
        return active ? t1.play() : t1.reverse()
    }, [active])

    return (
        <animated.div className="Nav" style={props}>
            <div className="Nav__items">
                <li className={`Nav__item ${current === 0 ? 'Nav__active' : ''}`} onClick={(e) => scroll("Hero")}>About</li>
                <li className={`Nav__item ${current === 1 ? 'Nav__active' : ''}`} onClick={(e) => scroll("Projects")}>Projects</li>
                <li className={`Nav__item ${current === 2 ? 'Nav__active' : ''}`} onClick={(e) => scroll("Skills")}>Skills</li>
                <li className={`Nav__item ${current === 3 ? 'Nav__active' : ''}`} onClick={(e) => scroll("Experiences")}>Experiences</li>
                <li className={`Nav__item ${current === 4 ? 'Nav__active' : ''}`} onClick={(e) => scroll("Education")}>Education</li>
            </div>
            <input className="Nav__checkbox" type='checkbox' id="Nav__ham" />
            <label className="Nav__ham" htmlFor="Nav__ham" onClick={() => setActive(!active)}>
                <div className="Nav__ham--item"></div>
                <div className="Nav__ham--item"></div>
                <div className="Nav__ham--item"></div>
            </label>
        </animated.div>
    )
}

export default Nav;
