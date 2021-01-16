import './Project.sass'

import GithubLink from '../../../utilities/images/githublink.svg'
import LiveLink from '../../../utilities/images/livelink.svg'

function Project({ title, image, desc, link, right }) {
    
    return (
        <div className={`Project ${ right ? "Project__right" : ""}`}>
            <div className="Project__container">
                <div className="Project__title">{title}</div>
                <div className="Project__desc">{desc}</div>
                <div className="Project__links">
                    <a className="Project__githubLink" href={link} target="_blank" rel="noopener noreferrer">
                        <img className="Project__link--image" src={GithubLink} alt="Github Link"/>
                    </a>
                    { link && <a className="Project__liveLink" href={link} target="_blank" rel="noopener noreferrer">
                        <img className="Project__link--image" src={LiveLink} alt="Live Preview"/>
                    </a>}
                </div>
            </div>
            <img className="Project__image" src={image} alt={title} />
        </div>
    )
}

export default Project
