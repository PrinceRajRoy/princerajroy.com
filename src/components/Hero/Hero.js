import gsap, { Power1 } from 'gsap';
import { Power4 } from 'gsap/gsap-core';
import React, { useContext, useEffect } from 'react'
import { NotifyContext } from '../../utilities/context/NotifyContext';
import './Hero.sass'

function Hero() {

    const context = useContext(NotifyContext)
    
    /* GSAP Stagger Animations on Page Load */
    useEffect(() => {
        const t1 = gsap.timeline()
        t1.from(".Hero", { 
            y: "-30%", 
            opacity: 0, 
            duration: 2, 
            ease: Power4.easeOut 
        })
        t1.from(".Hero__container > div", { 
            y: "-50%", 
            opacity: 0, 
            duration: 2, 
            stagger: 0.3, 
            ease: Power4.easeOut 
        }, "-=1.2")
        t1.from(".Hero__container > img", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        }, "-=2")
        t1.fromTo(".Hero__palette", {
            right: "-100%"
        }, {
            right: "0%",
            duration: 1,
            ease: Power4.easeOut
        }, "-=2.5")
        gsap.to(".Hero__scroll > div", {
            y: 33,
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

    /* Copy Color Palette To Clipboard */
    const copyPalette = (e) => {
        var colorCode = getComputedStyle(e.target).getPropertyValue("background-color")
        var tempInput = document.createElement("input")
        tempInput.value = colorCode
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand("Copy")
        document.body.removeChild(tempInput)
        context.setStatus("Copied!")
        context.setAlert(true)
    }

    return (
        <div className="Hero">
            <div className="Hero__container">
                <div className="Hero__title">&#x3c;Hey! I'm Prince <span className="Hero__blink"></span></div>
                <div className="Hero__about">
                    A <b>full stack web developer</b> from Assam, India.
                    I love crafting clean user friendly web experience and make awesome web apps.
                </div>
                <div className="Hero__buttons">
                    <a href="https://drive.google.com/open?id=1xLHIvxIGpB37G-Ks49nTtC5wVOMxJ4AE" target="_blank" rel="noopener noreferrer">
                        <button className="Hero__button">Click For CV</button>
                    </a>
                    <button className="Hero__button" onClick={() => scrollHire()}>Hire Me</button>
                </div>
                <div className="Hero__scroll">
                    <div></div>
                </div>
                <img className="Hero__profile" src={"https://princerajroy.site/Profile.jpg"} alt="Profile"/>
            </div>
            <div className="Hero__palette">
                <div className="Hero__palette--1" onClick={(e) => copyPalette(e)}></div>
                <div className="Hero__palette--2" onClick={(e) => copyPalette(e)}></div>
                <div className="Hero__palette--3" onClick={(e) => copyPalette(e)}></div>
                <div className="Hero__palette--4" onClick={(e) => copyPalette(e)}></div>
                <div className="Hero__palette--5" onClick={(e) => copyPalette(e)}></div>
                <div className="Hero__palette--6" onClick={(e) => copyPalette(e)}></div>
            </div>
        </div>
    )
}

export default Hero
