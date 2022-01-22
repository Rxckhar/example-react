import React, { useEffect, useState } from "react"
import "./Message.css"

function Message (props) {
    const [message, setMessage] = useState(props.message)

    useEffect(() => {
        console.log(props.message)
        setMessage(props.message)
        return () => {setMessage(null)}
    }, [props.message])

    return (!!message &&
        <div className="message">
            <div className="message_name">{message.name}:</div>
            <div className="message_text">{message.text}</div>
        </div>
        
    )
}

export default Message