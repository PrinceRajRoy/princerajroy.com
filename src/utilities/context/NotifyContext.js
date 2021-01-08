import { createContext, useEffect, useState } from 'react'

export const NotifyContext = createContext()

function NotifyContextProvider({ children }) {

    const [status, setStatus] = useState('Message Sent Successfully!')
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        if(alert) {
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    }, [alert])

    return (
        <NotifyContext.Provider value={{ status, alert, setStatus, setAlert }}>
            {children}
        </NotifyContext.Provider>
    )
}

export default NotifyContextProvider
