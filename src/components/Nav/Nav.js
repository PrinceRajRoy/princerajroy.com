import React, { useState } from 'react';
import './Nav.sass';
import Profile from '../../utilities/images/Profile.png';
import Connect from '../Connect/Connect';
import { useSpring, animated, config } from 'react-spring';
// import gsap from 'gsap'

function Nav() {

    const [active, setActive] = useState(0)
    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState("70")

    const props = useSpring({
        top: window.innerWidth <= 799 ? `${active * 50 + 5}px` : '0px',
        left: window.innerWidth > 799 ? `${left}px` : '50%',
        width: window.innerWidth > 799 ? `${width}px` : 'inherit',
        from: {
            width: '70px'
        },
        config: {
            ...config.wobbly
        }
    })

    const scroll = (val, num, target) => {
        if(window.innerWidth > 799) {
            setLeft(val.offsetLeft)
            setWidth(val.offsetWidth)
            
            // gsap.to('.Nav__active', {
            //     left: val.offsetLeft,
            //     width: val.offsetWidth
            // })
        }
        setActive(num)
        target = document.getElementsByClassName(target)[0]
        window.scrollTo(target.offsetLeft, target.offsetTop - 80)
    }

    return (
        <div className="Nav">
            <input type='checkbox' id="Nav__check" />
            <label className="ham" htmlFor="Nav__check">
                <div className="ham__item"></div>
                <div className="ham__item"></div>
                <div className="ham__item"></div>
            </label>
            <nav className="Nav__container">
                <img className="Nav__profile" src={Profile} alt="Profile"/>
                <span className="Nav__name" onClick={() => window.scrollTo(0, 0)}>Prince Raj Roy</span>
                <ul className="Nav__items">
                    <animated.li className="Nav__active" style={props}/>
                    <li onClick={(e) => scroll(e.currentTarget, 0, "Hero")}>About</li>
                    <li onClick={(e) => scroll(e.currentTarget, 1, "Projects")}>Projects</li>
                    <li onClick={(e) => scroll(e.currentTarget, 2, "Skills")}>Skills</li>
                    <li onClick={(e) => scroll(e.currentTarget, 3, "Experiences")}>Experiences</li>
                    <li onClick={(e) => scroll(e.currentTarget, 4, "Education")}>Education</li>
                </ul>
                <Connect />
            </nav>
        </div>
    )
}

export default Nav;
