import Skill from './Skill/Skill'
import './Skills.sass'
import Skill1 from '../../utilities/images/Skill1.svg'
import Skill2 from '../../utilities/images/Skill2.svg'
import Skill3 from '../../utilities/images/Skill3.svg'

function Skills() {
    return (
        <div className="Skills">
            <div className="titleHolder">
                Skillset
            </div>
            <div className="Skills__container">
                <Skill icon={Skill1} title={"FRONT-END DEVELOPEMENT"} desc="Have been in this field for quite some time, love to tweak css here and there with some magic from javascript to create smooth web apps. Mostly experienced in working with ReactJS, GSAP, etc. Find more on CV."/>
                <Skill icon={Skill2} title={"BACK-END DEVELOPMENT"} desc="Worked on backend for some projects, a video calling app, library management system, etc. NodeJS (obviously), HapiJS, etc are my area of knowledge. More on github."/>
                <Skill icon={Skill3} title={"MISCELLANEOUS"} desc="Knowledge of several programmign languages (C, C++, Python), Designing (FIGMA) & animations (BLENDER) checkout my IG for some cool animations!" subtitle="Online Platforms" subdesc="Firebase, Heroku"/>
            </div>
        </div>
    )
}

export default Skills
