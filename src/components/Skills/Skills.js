import Skill from './Skill/Skill'
import './Skills.sass'
import HTML from '../../utilities/images/HTML.svg'
import NODE from '../../utilities/images/NODE.svg'
import FIGMA from '../../utilities/images/FIGMA.svg'
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
                <Skill icon={HTML} title={"Front-End Development"} desc="HTML, CSS, JS" subtitle="Frameworks" subdesc="ReactJS, Bootstrap, React-Spring, GSAP"/>
                <Skill icon={NODE} title={"Back-End Development"} desc="NodeJS, KnexJS" subtitle="Frameworks" subdesc="HapiJS, ExpressJS"/>
                <Skill icon={FIGMA} title={"Softwares"} desc="FIGMA, VSCODE, Anaconda apps" subtitle="Frameworks" subdesc="ReactJS, Bootstrap, React-Spring"/>
                <Skill icon={BLENDER} title={"Meta"} desc="Blender, Inkscape, VSDC"/>
            </div>
        </div>
    )
}

export default Skills
