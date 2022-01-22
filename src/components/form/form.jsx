import './form.css';
import React, { useState, useRef } from 'react';

import Message from '../message/Message';

function Form () {
    const [countMessage, setCountMessage] = useState(0)
    const [historyMessages, seHistoryMessages] = useState([])

    const inputName = useRef()
    const inputText = useRef()

    const upCountMessage = (countMessage) => {
        setCountMessage(countMessage + 1)
    }

    const pushHistoryMessages = (historyMessages) => {
        const name = inputName.current.value
        const text = inputText.current.value
        inputText.current.value = ""

        const message = {
            name: name,
            text: text,
            dataTime: new Date
        }

        console.log(historyMessages)

        historyMessages.push(message)
        setCountMessage(historyMessages.length)
        seHistoryMessages([...historyMessages])
    }

    return (
        <div className="Form__box">
            <div className="Box__message">
                {historyMessages.map((message, index) => (
                    <Message message={message} key={"message_" + index} />
                ))}
            </div> 
            {/* {countMessage} */}
            <footer>
                <div className="send_top">
                    <div className="name">Имя </div>
                    <input className="send_btn" type="text" ref={inputName}/>
                </div>
                
                <div className="send_bottom">
                    <div className="send_text">Сообщение</div>
                    <input className="send_btn" type="text" ref={inputText}/>
                    <button className="Box__send" onClick={() => pushHistoryMessages(historyMessages)}>Отправить</button>
                </div>
                
            </footer>
        </div>

        
    )
}

export default Form