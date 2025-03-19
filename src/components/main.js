import React from "react";
import { useState } from "react";

import "./main.css";

import Options from "./options";
import Quiz from "./quiz";
import Ad from "./ad";

function Main(){
    const [selectedOptions, setSelectedOptions] = useState(["Monographs"])

    return(
        <div className="main">
            <Options 
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
            <Quiz selectedOptions={selectedOptions} />
            <Ad />
        </div>
    )
}

export default Main