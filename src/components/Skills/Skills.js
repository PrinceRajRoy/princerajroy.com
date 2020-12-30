import Skill from './Skill/Skill'
import './Skills.sass'
import HTML from '../../utilities/images/HTML.svg'
import NODE from '../../utilities/images/NODE.svg'
import FIGMA from '../../utilities/images/FIGMA.png'
import BLENDER from '../../utilities/images/BLENDER.svg'

function Skills() {
    return (
        <div className="Skills">
            <div className="titleHolderSkills titleHolder">
                <div className="line left"></div>
                    <span>SKILLS</span>
                <div className="line right"></div>
            </div>
            <div className="Skills__bg">
                <Skill icon={HTML} title={"Front-End Development"} desc="HTML, CSS, JS, SASS" subtitle="Some Frameworks" subdesc="ReactJS, Bootstrap, React-Spring, GSAP"/>
                <Skill icon={NODE} title={"Back-End Development"} desc="NodeJS, KnexJS, ObjectionJs" subtitle="Some Frameworks" subdesc="HapiJS, ExpressJS"/>
                <Skill icon={FIGMA} title={"Softwares"} desc="FIGMA, VSCode, Xampp, Postman, SQLite, Anaconda Apps, MySQL Workbench" subtitle="Online Platforms" subdesc="Firebase, Heroku"/>
                <Skill icon={BLENDER} title={"Meta"} desc="C, C++, Java, Python, Matlab, MySQL" subtitle={"Other Softwares"} subdesc={"Blender, Inkscape, VSDC"}/>
            </div>
        </div>
    )
}

export default Skills
