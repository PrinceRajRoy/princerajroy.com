import React, { useState } from 'react'
import './Hire.sass'
import emailjs from 'emailjs-com'
import { animated, config, useSpring } from 'react-spring'

function Hire() {

    const [status, setStatus] = useState('Message Sent Successfully!')
    const [alert, setAlert] = useState(false)

    const props = useSpring({
        right: alert ? "20px" : "-300px",
        config: {
            ...config.wobbly
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const serviceId = process.env.REACT_APP_SERVICE_ID
        const templateId = process.env.REACT_APP_TEMPLATE_ID
        const userId = process.env.REACT_APP_USER_ID
        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((res) => {
                setStatus("Message Sent Successfully!")
                setAlert(true)
                e.target.reset()
                setTimeout(() => setAlert(false), 5000)
            }).catch((err) => {
                setStatus(err)
                setStatus("Unsuccessfully, Try Again!")
            })
    }

    return (
        <form className="Hire" onSubmit={handleSubmit}>
            <div className="Hire__title">Hire Me</div>
            <label htmlFor="name" className="Hire__label">Name *</label>
            <input id="name" name="name" type="text" className="Hire__input" required/>
            <label htmlFor="email" className="Hire__label">Email *</label>
            <input id="email" name="email" type="email" className="Hire__input" required/>
            <label htmlFor="message" className="Hire__label">Message *</label>
            <textarea id="message" name="message" type="text" className="Hire__input" required/>
            <button className="Hire__btn">SUBMIT</button>
            <animated.div style={props} className="Hire__status">
                <div>{status}</div>
            </animated.div>
        </form>
    )
}

export default Hire
