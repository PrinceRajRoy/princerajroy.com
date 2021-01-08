import React, { useContext } from 'react'
import { animated, config, useSpring } from 'react-spring'
import { NotifyContext } from '../../utilities/context/NotifyContext'
import './Notification.sass'

function Notification() {

    const context = useContext(NotifyContext)

    const props = useSpring({
        right: context.alert ? "20px" : "-300px",
        config: {
            ...config.wobbly
        }
    })

    return (
        <animated.div style={props} className="Notification">
            <div>{context.status}</div>
        </animated.div>
    )
}

export default Notification
