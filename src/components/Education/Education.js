import React, { useEffect } from 'react'
import './Education.sass'
import School from '../../utilities/images/school.svg'
import Grad from '../../utilities/images/grad.svg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Power4 } from 'gsap/gsap-core'

function Education() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const boxes = gsap.utils.toArray(".Education__timeline--stat")
        boxes.forEach(box => {
            gsap.from(box, {
                scrollTrigger: {
                    trigger: box,
                    start: "top bottom"
                },
                x: box.classList.contains("right") ? 200 : -200,
                opacity: 0,
                duration: 1.5,
                ease: Power4.easeInOut
            })
        })
        const icons = gsap.utils.toArray(".icon")
        icons.forEach(icon => {
            gsap.from(icon, {
                scrollTrigger: {
                    trigger: icon,
                    start: "top bottom"
                },
                scale: 0,
                opacity: 0,
                duration: 1.5,
                ease: Power4.easeInOut
            })
        })
    }, [])

    return (
        <div className="Education">
            <div className="titleHolder">
                Education
            </div>
            <div className="Education__timeline">
                <div className="Education__item">
                    <div className="icon">
                        <img src={School} alt="School"/>
                    </div>
                    <div className="Education__timeline--stat">
                        <div className="institute">Kendriya Vidyalaya, Tinsukia, Assam</div>
                        <div className="performance">High School (CBSE Board)</div>
                        <div className="duration">2004 - 2014</div>
                    </div>
                </div>
                
                <div className="Education__item">
                    <div className="icon">
                        <img src={School} alt="School"/>
                    </div>
                    <div className="Education__timeline--stat right">
                        <div className="institute">Kendriya Vidyalaya, Tinsukia, Assam</div>
                        <div className="performance">Higher Secondary (CBSE Board)</div>
                        <div className="duration">2014 - 2016</div>
                    </div>
                </div>
                
                <div className="Education__item">
                    <div className="icon">
                        <img src={Grad} alt="School"/>
                    </div>
                    <div className="Education__timeline--stat">
                        <div className="institute">Tezpur University, Tezpur, Assam</div>
                        <div className="performance">BTech in Computer Science Engg.</div>
                        <div className="duration">2016 - 2020</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
