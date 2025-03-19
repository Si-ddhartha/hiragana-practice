import React from "react";
import { useState, useEffect } from "react";
import "./quiz.css";

import hiragana from "../assets/hiragana";

function Quiz({selectedOptions}){
    const [filteredKanas, setFilteredKanas] = useState([])
    const [currentKana, setCurrentKana] = useState(hiragana[0])

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
        }
    }

    return(
        <div className="quiz-container">
            <div className="quiz-question">
                <h1>{currentKana.kana}</h1>
            </div>

            <div className="quiz-buttons">
                <button>Check</button>
                <button onClick={getRandomKana}>Next</button>
            </div>
        </div>
    )
}

export default Quiz