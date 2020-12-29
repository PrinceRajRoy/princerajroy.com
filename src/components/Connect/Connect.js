import './Connect.sass'
import FB from '../../utilities/images/fb.svg'
import GH from '../../utilities/images/github.svg'
import IG from '../../utilities/images/insta.svg'
import LI from '../../utilities/images/linkedin.svg'
import { useState } from 'react'

function Connect() {

    const [check, setCheck] = useState(true)
    
    window.onscroll = () => {
        var connect = document.getElementsByClassName("Connect")[0]
        var ham = document.querySelectorAll(".ham__item")
        if(window.scrollY > window.innerHeight && check) {
            connect.classList.add("active")
            ham.forEach(el => {
                el.setAttribute("style", "background: var(--blue4)")
            })
            setCheck(false)
        }
        else if(window.scrollY <= window.innerHeight) {
            connect.classList.remove("active")
            ham.forEach(el => {
                el.setAttribute("style", "background: var(--blue0)")
            })
            setCheck(true)
        }
    }

    return (
        <ul className="Connect">
            <li>
                <a href="https://www.facebook.com/princeraj.roy/" target="_blank" rel="noopener noreferrer">
                    <img src={FB} alt="Facebook"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/PrinceRajRoy" target="_blank" rel="noopener noreferrer">
                    <img src={GH} alt="Github"/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/princerajroy/" target="_blank" rel="noopener noreferrer">
                    <img src={IG} alt="Instagram"/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/prince-raj-roy/" target="_blank" rel="noopener noreferrer">
                    <img src={LI} alt="LinkedIn"/>
                </a>
            </li>
        </ul>
    )
}

export default Connect
