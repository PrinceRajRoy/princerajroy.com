import React, { useContext } from 'react'
import './Hire.sass'
import emailjs from 'emailjs-com'
import { NotifyContext } from '../../utilities/context/NotifyContext'

function Hire() {

  const context = useContext(NotifyContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    document.getElementsByClassName("Hire__btn")[0].disabled = true
    const serviceId = process.env.REACT_APP_SERVICE_ID
    const templateId = process.env.REACT_APP_TEMPLATE_ID
    const userId = process.env.REACT_APP_USER_ID
    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((res) => {
        context.setStatus("Message Sent Successfully!")
        context.setAlert(true)
        e.target.reset()
      }).catch((err) => {
        context.setStatus("Unsuccessfully, Try Again!")
        context.setAlert(true)
      })
  }

  return (
    <form className="Hire" onSubmit={handleSubmit}>
      <div className="Hire__title">Contact Me</div>
      <label htmlFor="name" className="Hire__label">Name</label>
      <input id="name" name="name" type="text" className="Hire__input" required />
      <label htmlFor="email" className="Hire__label">Email</label>
      <input id="email" name="email" type="email" className="Hire__input" required />
      <label htmlFor="message" className="Hire__label">Message</label>
      <textarea id="message" name="message" type="text" className="Hire__input" required />
      <button className="Hire__btn">SUBMIT</button>
    </form>
  )
}

export default Hire
