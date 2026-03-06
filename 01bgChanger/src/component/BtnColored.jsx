import React from 'react'

// 1. Capital 'B' 
// 2. Destructure 'setColour' from the props object
function BtnColored({ colour, setColour, txtColor = "white" }) {
    return (
        <button
            className="outline-none px-4 py-1 rounded-full  shadow-md"
            style={{ backgroundColor: colour, color: txtColor }}
            onClick={() => setColour(colour)} // Now setColour is available!
        >
            {colour}
        </button>
    )
}

export default BtnColored