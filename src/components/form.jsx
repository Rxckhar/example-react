import React, { useState } from "react";
import "./form.css";

function Form() {
    const [countMessage, setCountMassage] = useState(0);
    return(
        <div className = "Form_box">
            <div className = "Box_title">
                Сообщения {countMessage}
            </div>
            <div className = "Box_massages">
                Тут будут сообщения
            </div>
            <div className = "Box_send">
                <label>
                    Имя
                    <input/>
                </label>
                <label>
                    Сообщения
                    <textarea/>

                </label>
                <button>
                    Добавить
                </button>
            </div>
        </div>
    );
}

export default Form;