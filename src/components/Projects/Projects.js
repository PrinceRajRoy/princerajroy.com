import React, { useContext, useEffect } from 'react'
import Project from './Project/Project'
import './Projects.sass'

import P1 from '../../utilities/images/P1.png'
import P2 from '../../utilities/images/P2.png'
import P3 from '../../utilities/images/P3.PNG'
import P5 from '../../utilities/images/P5.PNG'
import { NotifyContext } from '../../utilities/context/NotifyContext'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function Projects() {

    const context = useContext(NotifyContext)

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

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const items = document.querySelectorAll('.Project')
        items.forEach((el, index) => {
            gsap.to(el.querySelector('.Project__image'), {
                y: '-100px',
                ease: 'none',
                scrollTrigger: {
                    trigger: el,
                    scrub: true
                }
            })
        })
    }, [])

    return (
        <div className="Projects">
            <div className="Projects__palettes">
                <div className="Projects__palette Projects__palette--1" onClick={(e) => copyPalette(e)}></div>
                <div className="Projects__palette Projects__palette--2" onClick={(e) => copyPalette(e)}></div>
                <div className="Projects__palette Projects__palette--3" onClick={(e) => copyPalette(e)}></div>
                <div className="Projects__palette Projects__palette--4" onClick={(e) => copyPalette(e)}></div>
                <div className="Projects__palette Projects__palette--5" onClick={(e) => copyPalette(e)}></div>
                <div className="Projects__palette Projects__palette--6" onClick={(e) => copyPalette(e)}></div>
            </div>
            <div className="titleHolder">
                Featured Projects
            </div>
            <div className="Projects__items">
                <Project 
                    title="Spotify Web Clone" 
                    image={P3} 
                    desc="ReactJS App that uses the popular official Spotify API's which provides the all the Spotify user data, given the user must have Premium Spotify Account. The data is presented using React Context API."
                    link="https://github.com/PrinceRajRoy/Spotify-Clone-App" />
                <Project 
                    title="Netflix Clone" 
                    image={P1} 
                    desc="A ReactJS App that uses the popular 'The Movie Database' (TMDb) API's which provides the ongoing popular TV Series and Movies listing and presents to the user in the same visual way as Netflix."
                    link="https://github.com/PrinceRajRoy/Netflix-Clone-App" />
                <Project 
                    title="Astoogle" 
                    image={P2}
                    desc="Made using ReactJS, and app that fetches Near Earth Objects API data from NASA APIs and presents it to the user."
                    link="https://github.com/PrinceRajRoy/Astoogle" />
                <Project 
                    title="Text Chat App" 
                    image={P5} 
                    desc="Based on ReactJS + NodeJS + Socket.io, an app for texting, which allows user to join a room with given id and talk with others in the same room."
                    link="https://github.com/PrinceRajRoy/ChatApp" />
            </div>
        </div>
    )
}

export default Projects
