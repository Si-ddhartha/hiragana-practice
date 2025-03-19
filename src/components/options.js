import React from "react";
import "./options.css";

function Options({selectedOptions, setSelectedOptions}){
    const hiraganaOptions = [
        "Monographs",
        "Monographs Diacritics",
        "Digraphs",
        "Digraphs Diacritics",
    ]

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prev) => 
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                    : [...prev, option]
        )
    }

    return(
        <div className="options-container">
            <div className="options-hiragana">
                <h2>Hiragana</h2>
                {hiraganaOptions.map((option) => (
                    <label key={option}>
                        <input 
                            type="checkbox"
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default Options