import { useEffect, useState } from 'react';
import './Nav.sass';
import { useSpring, animated, config } from 'react-spring';
import gsap from 'gsap'
import { Power4 } from 'gsap/gsap-core';

function Nav() {

    const [active, setActive] = useState(false)

    const props = useSpring({
        width: active ? `520px` : '48px',
        config: active ? config.wobbly : config.stiff
    })
    
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

    /* Scroll To The Clicked Nav Item Section */
    const scroll = (target, index) => {
        target = document.getElementsByClassName(target)[0]
        window.scrollTo(target.offsetLeft, target.offsetTop)
    }
    

    useEffect(() => {
        var items = document.querySelectorAll(".Nav__item")
        const navActivate = () => {
            let scrollTop = window.pageYOffset
            items.forEach((el, index) => {
                let scrollTarget = document.querySelector(`.${el.dataset.target}`)
                if((scrollTarget.offsetTop <= scrollTop) && (scrollTarget.offsetTop + scrollTarget.offsetHeight > scrollTop)) {
                    el.classList.add('Nav__item--active')
                } else {
                    el.classList.remove('Nav__item--active')
                }
            })
        }
        window.addEventListener("scroll", navActivate)
        return () => {
            window.removeEventListener("scroll", navActivate)
        }
    }, [])

    return (
        <animated.div className="Nav" style={props}>
            <div className="Nav__items">
                <li className={`Nav__item Nav__item--active`} data-target="Hero" onClick={(e) => scroll("Hero", 0)}>About</li>
                <li className={`Nav__item`} data-target="Projects" onClick={(e) => scroll("Projects", 1)}>Projects</li>
                <li className={`Nav__item`} data-target="Skills" onClick={(e) => scroll("Skills", 2)}>Skills</li>
                <li className={`Nav__item`} data-target="Experiences" onClick={(e) => scroll("Experiences", 3)}>Experiences</li>
                <li className={`Nav__item`} data-target="Education" onClick={(e) => scroll("Education", 4)}>Education</li>
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
