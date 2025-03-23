import React from "react";
import { useState, useEffect, useRef } from "react";
import "./quiz.css";

import hiragana from "../assets/hiragana";

function Quiz({selectedOptions}){
    const [filteredKanas, setFilteredKanas] = useState([])
    const [currentKana, setCurrentKana] = useState(hiragana[0])
    const [userInput, setUserInput] = useState("")
    const [resultMessage, setResultMessage] = useState("")

    const inputRef = useRef(null)

    useEffect(() => {   
        const filteredList = hiragana.filter((item) => 
            selectedOptions.includes(item.category)
        )

        setFilteredKanas(filteredList)
    }, [selectedOptions])

    const getRandomKana = () => {
        if (filteredKanas.length > 0) {
            const randomKana = filteredKanas[Math.floor(Math.random() * filteredKanas.length)]
            setCurrentKana(randomKana)
            setUserInput("")
            setResultMessage("")
            inputRef.current?.focus()
        }
    }

    const handleCheck = () => {
        if (userInput.trim() === ""){
            setResultMessage("Please write the romaji!!!")
        }

        else if (userInput.toLowerCase() === currentKana.romaji.toLowerCase()){
            setResultMessage("Correct")
        }
        else{
            setResultMessage("Incorrect")
        }
    }

    return(
        <div className="quiz-container">
            <div className="quiz-question">
                <h1>{currentKana.kana}</h1>
            </div>

            <div className="quiz-input">
                <input
                    ref={inputRef}
                    name="user-input" 
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter"){
                            handleCheck();
                        }
                    }}
                    autoFocus
                />
            </div>

            <div className="quiz-buttons">
                <button onClick={handleCheck}>Check</button>
                <button onClick={getRandomKana}>Next</button>
            </div>

            <div 
                className="quiz-question-result" 
                style={{color: resultMessage === "Correct" ? "darkgreen" : "darkred"}}
            >
                <p>{resultMessage}</p>
            </div>

        </div>
    )
}

export default Quiz