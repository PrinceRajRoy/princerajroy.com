import { useEffect, useState } from 'react';
import './Nav.sass';
import Connect from '../Connect/Connect';
import { useSpring, animated, config } from 'react-spring';
import gsap from 'gsap'

function Nav() {

    const [active, setActive] = useState(0)
    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState(70)
    const [winwidth, setWinwidth] = useState(window.innerWidth)

    /* Props For Active Nav BG */
    const props = useSpring({
        top: winwidth <= 799 ? `${active * 50 + 5}px` : '0px',
        left: winwidth > 799 ? `${left}px` : '140px',
        width: winwidth > 799 ? `${width}px` : '280px',
        config: {
            ...config.wobbly
        }
    })

    /* Scroll To The Clicked Nav Item Section */
    const scroll = (target) => {
        target = document.getElementsByClassName(target)[0]
        window.scrollTo(target.offsetLeft, target.offsetTop - (window.innerWidth > 799 ? 60 : 40))
    }

    /* For Moving Active Nav Item Based on Window Scroll Position */
    useEffect(() => {
        var containers = gsap.utils.toArray(".App > div:nth-child(n+2):nth-last-child(n+3)")
        var items = gsap.utils.toArray(".Nav__items > li:nth-child(n+1):nth-last-child(n+1)")
        const navActivate = () => {
            var top = window.pageYOffset
            containers.forEach((el, index) => {
                if((el.offsetTop <= top + 200) && (el.offsetTop + el.offsetHeight > top)) {
                    window.innerWidth > 799 ? setLeft(items[index + 1].offsetLeft) : setActive(index)
                    setWidth(items[index + 1].offsetWidth)
                }
            })
            /* Update Window Width For Proper Animations on Window Resizing */
            setWinwidth(window.innerWidth)
        }
        window.addEventListener("scroll", navActivate)

        /* For Maintaining Correct Nav Active While Window Resizing */
        window.addEventListener("resize", navActivate)
        return () => {
            window.removeEventListener("scroll", navActivate)
            window.removeEventListener("resize", navActivate)
        }
    }, [])

    return (
        <div className="Nav">
            <input type='checkbox' id="Nav__check" />
            <label className="ham" htmlFor="Nav__check">
                <div className="ham__item"></div>
                <div className="ham__item"></div>
                <div className="ham__item"></div>
            </label>
            <nav className="Nav__container">
                <img className="Nav__profile" src={"https://princerajroy.site/Profile.jpg"} alt="Profile"/>
                <span className="Nav__name" onClick={() => window.scrollTo(0, 0)}>Prince Raj Roy</span>
                <ul className="Nav__items">
                    <animated.li className="Nav__active" style={props}/>
                    <li onClick={(e) => scroll("Hero")}>About</li>
                    <li onClick={(e) => scroll("Projects")}>Projects</li>
                    <li onClick={(e) => scroll("Skills")}>Skills</li>
                    <li onClick={(e) => scroll("Experiences")}>Experiences</li>
                    <li onClick={(e) => scroll("Education")}>Education</li>
                </ul>
                <Connect />
            </nav>
        </div>
    )
}

export default Nav;
