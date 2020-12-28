import React from 'react'
import './Experiences.sass'
import Experience from './Experience/Experience'

function Experiences() {
    return (
        <div className="Experiences">
            <div className="titleHolderExperiences titleHolder">
                <div className="line left"></div>
                <span>EXPERIENCES</span>
                <div className="line right"></div>
            </div>
            <div className="Experiences__bg">
                <Experience 
                    where={"Garexi Media Pvt. Ltd."} 
                    role={"Web Developer"} 
                    what={"Developed their official website and it's UI using ReactJS and Firebase to collect data from users visiting the site for services"} duration={"June 2019 - August 2019"} />
                <Experience 
                    where={"Antbridge Pvt. Ltd."} 
                    role={"Full Stack Developer"} 
                    what={"Developed their internal ADMIN Panel App for collecting, updating and monitoring User Generated Content (UGC) along with some API's, created using ReactJS (Masonry), NodeJS (Objection, HapiJS, Knex)"} duration={"Jan 2020 - June 2020"} />
            </div>
        </div>
    )
}

export default Experiences
