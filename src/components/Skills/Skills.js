import Skill from './Skill/Skill'
import './Skills.sass'
import HTML from '../../utilities/images/HTML.svg'
import FIGMA from '../../utilities/images/FIGMA.svg'
import JAVASCRIPT from '../../utilities/images/JAVASCRIPT.svg'
import CSS from '../../utilities/images/CSS.svg'

function Skills() {
    return (
        <div className="Skills">
            <div className="titleHolderSkills titleHolder">
                <div className="line left"></div>
                    <span>SKILLS</span>
                <div className="line right"></div>
            </div>
            <div className="Skills__bg">
                <Skill icon={HTML} desc="Front-End Development - HTML, CSS, JS <br /> Frameworks - ReactJS, Bootstrap, React-Spring"/>
                <Skill icon={FIGMA} desc="Front-End Development - HTML, CSS, JS <br /> Frameworks - ReactJS, Bootstrap, React-Spring"/>
                <Skill icon={JAVASCRIPT} desc="Front-End Development - HTML, CSS, JS <br /> Frameworks - ReactJS, Bootstrap, React-Spring"/>
                <Skill icon={CSS} desc="Front-End Development - HTML, CSS, JS <br /> Frameworks - ReactJS, Bootstrap, React-Spring"/>
            </div>
        </div>
    )
}

export default Skills
