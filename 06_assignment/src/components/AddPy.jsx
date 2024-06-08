import React, { useState } from "react";
import Card from "../utils/Card";


const AddPy = () => {
    const [py, setPy] = useState("");
    const [result, setResult] = useState("");

    function handleClick() {
        if (py[0] == "P" && py[1] == "y") {
            setResult(py);
        } else if (py[0] == "p" && py[1] == "y") {
            setResult(py);
        } else {
            setResult("Py" + py);
        }
    }

    return (
        <>
            <h3> Q no 3: Check if word starts with Py</h3>
            <label>Enter your word: </label>
            <input
                type="text"
                value={py}
                onChange={(e) => setPy(e.target.value)}
            />
            <br />
            <button type="submit" onClick={handleClick}>
                Click me to Check
            </button>
            <br />
            <p>Here is the Result: {result} </p>
        </>
    );
};

export default AddPy;
