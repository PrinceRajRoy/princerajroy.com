import React, { useEffect, useState } from 'react'
import Project from './Project/Project'
import './Projects.sass'

import P1 from '../../utilities/images/P1.png'
import P2 from '../../utilities/images/P2.png'
import P3 from '../../utilities/images/P3.PNG'
import P4 from '../../utilities/images/P4.png'
import P5 from '../../utilities/images/P5.PNG'
import P6 from '../../utilities/images/P6.PNG'

function Projects() {

    const [current, setCurrent] = useState(0)
    const [childs, setChilds] = useState(0)
    const [allow, setAllow] = useState(true)
    
    const next = () => {
        if(allow) {
            setAllow(false)
            var container = document.getElementsByClassName("Projects__items")[0]
            var item = document.getElementsByClassName("Projects__items")[0].children[0]
            if(current < childs - 3) {
                document.getElementsByClassName("Projects__nav--1")[0].classList.add("Projects__nav--active")
                document.getElementsByClassName("Projects__nav--3")[0].classList.add("Projects__nav--active")
                container.style.scrollSnapType = "none"
                container.scrollLeft += item.scrollWidth
                if(current === childs - 4)
                    document.getElementsByClassName("Projects__nav--3")[0].classList.remove("Projects__nav--active")
                setCurrent(current + 1)
                setTimeout(() => {
                    container.style.scrollSnapType = "x mandatory"
                    setAllow(true)
                }, 500)
            } else {
                setAllow(true)
            }
        }
    }

    const previous = () => {
        if(allow) {
            setAllow(false)
            var container = document.getElementsByClassName("Projects__items")[0]
            var item = document.getElementsByClassName("Projects__items")[0].children[0]
            if(current > 0) {
                document.getElementsByClassName("Projects__nav--1")[0].classList.add("Projects__nav--active")
                document.getElementsByClassName("Projects__nav--3")[0].classList.add("Projects__nav--active")
                container.style.scrollSnapType = "none"
                container.scrollLeft -= item.scrollWidth
                if(current === 1)
                    document.getElementsByClassName("Projects__nav--1")[0].classList.remove("Projects__nav--active")
                setCurrent(current - 1)
                setTimeout(() => {
                    container.style.scrollSnapType = "x mandatory"
                    setAllow(true)
                }, 500)
            } else {
                setAllow(true)
            }
        }
    }

    useEffect(() => {
        var container = document.getElementsByClassName("Projects__items")[0]
        if(window.screen.width < 600) {
            var item = document.getElementsByClassName("Projects__items")[0].children[0]
            container.scrollLeft = container.scrollLeft + item.offsetWidth
        }
        setChilds(container.childElementCount)
    }, [childs])

    return (
        <div className="Projects">
            <div className="titleHolderProjects titleHolder">
                <div className="line left"></div>
                <span>FEATURED PROJECTS</span>
                <div className="line right"></div>
            </div>
            <div className="Projects__items">
                <div className="Projects__placeholder"></div>
                <Project 
                    active={current === 0}
                    title="Netflix Clone" 
                    image={P1} 
                    desc="A ReactJS App that uses the popular 'The Movie Database' (TMDb) API's which provides the ongoing popular TV Series and Movies listing and presents to the user in the same visual way as Netflix."
                    link="https://github.com/PrinceRajRoy/Netflix-Clone-App" />
                <Project 
                    active={current === 1}
                    title="Astoogle" 
                    image={P2}
                    desc="Made using ReactJS, and app that fetches Near Earth Objects API data from NASA APIs and presents it to the user."
                    link="hhttps://github.com/PrinceRajRoy/Astoogle" />
                <Project 
                    active={current === 2}
                    title="Spotify Web Clone" 
                    image={P3} 
                    desc="ReactJS App that uses the popular official Spotify API's which provides the all the Spotify user data, given the user must have Premium Spotify Account. The data is presented using React Context API."
                    link="https://github.com/PrinceRajRoy/Spotify-Clone-App" />
                <Project 
                    active={current === 3}
                    title="Library Management System" 
                    image={P4}
                    desc="Made using ReactJS + NodeJS App for library book management which allows issuing, returning and viewing options of current books in the library."
                    link="https://github.com/PrinceRajRoy/Library-Management-System" />
                <Project 
                    active={current === 4}
                    title="Text Chat App" 
                    image={P5} 
                    desc="Based on ReactJS + NodeJS + Socket.io, an app for texting, which allows user to join a room with given id and talk with others in the same room."
                    link="https://github.com/PrinceRajRoy/ChatApp" />
                <Project 
                    active={current === 5}
                    title="Video Call App" 
                    image={P6} 
                    desc="Based on WebRTC - Peer, ReactJS & NodeJS App for Video calling, which allows user to join a room with given id for conference video call with others."
                    link="https://github.com/PrinceRajRoy/VideoCallApp" />
                <div className="Projects__placeholder"></div>
            </div>
            <div className="Projects__nav">
                <div className="Projects__nav--1" onClick={() => previous()}>
                    <span className="Projects__nav--button1"></span>
                </div>
                <div className="Projects__nav--2"></div>
                <div className="Projects__nav--3 Projects__nav--active" onClick={() => next()}>
                    <span className="Projects__nav--button2"></span>
                </div>
            </div>
        </div>
    )
}

export default Projects
