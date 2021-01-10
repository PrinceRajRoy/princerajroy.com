import './Connect.sass'
import FB from '../../utilities/images/facebook.svg'
import GH from '../../utilities/images/github.svg'
import IG from '../../utilities/images/insta.svg'
import LI from '../../utilities/images/linkedin.svg'
import { useEffect, useState } from 'react'

function Connect() {

    return (
        <ul className="Connect">
            <li className="Connect__item">
                <a href="https://www.facebook.com/princeraj.roy/" target="_blank" rel="noopener noreferrer">
                    <img src={FB} alt="Facebook"/>
                </a>
            </li>
            <li className="Connect__item">
                <a href="https://github.com/PrinceRajRoy" target="_blank" rel="noopener noreferrer">
                    <img src={GH} alt="Github"/>
                </a>
            </li>
            <li className="Connect__item">
                <a href="https://www.instagram.com/princerajroy/" target="_blank" rel="noopener noreferrer">
                    <img src={IG} alt="Instagram"/>
                </a>
            </li>
            <li className="Connect__item">
                <a href="https://www.linkedin.com/in/prince-raj-roy/" target="_blank" rel="noopener noreferrer">
                    <img src={LI} alt="LinkedIn"/>
                </a>
            </li>
            <li className="Connect__item"></li>
        </ul>
    )
}

export default Connect
