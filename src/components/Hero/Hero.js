import gsap, { Power1 } from 'gsap';
import { Power4 } from 'gsap/gsap-core';
import React, { useEffect } from 'react'
import './Hero.sass'

function Hero() {
    
    /* GSAP Stagger Animations on Page Load */
    useEffect(() => {
        gsap.to(".Hero__scroll > div", {
            y: 37,
            ease: Power1.easeInOut,
            repeat: -1,
            duration: 0.8,
            yoyo: true
        })
        gsap.to(".Hero__blink", {
            opacity: 0,
            ease: Power4.easeInOut,
            repeat: -1,
            duration: 0.6,
            yoyo: true
        })
    }, [])

    const scrollHire = () => {
        const hire = document.getElementsByClassName("Hire")[0]
        window.scrollTo(hire.offsetLeft, hire.offsetTop - hire.clientHeight * 0.2)
    }

    return (
        <div className="Hero">
            <div className="Hero__name">Prince Raj Roy</div>
            <img className="Hero__profile" src={"https://princerajroy.site/Profile.jpg"} alt="Profile"/>
            <div className="Hero__container">
                <div className="Hero__title">&#x3c;Hey!<br /> I'm Prince  <span className="Hero__blink"></span></div>
                <div className="Hero__about">
                    A <b>full stack web developer</b> from Assam, India.
                    I love crafting clean user friendly web experience and make awesome web apps.
                </div>
                <div className="Hero__buttons">
                    <a href="https://drive.google.com/open?id=1xLHIvxIGpB37G-Ks49nTtC5wVOMxJ4AE" target="_blank" rel="noopener noreferrer">
                        <button className="Hero__button">Click For CV</button>
                    </a>
                    <button className="Hero__button" onClick={() => scrollHire()}>Let's Chat!</button>
                </div>
                <div className="Hero__scroll">
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
