import React, { useState } from "react";
import Card from "../utils/Card";

function CelsiusToFahrenheit() {
    const [temperature, setTemperature] = useState(null);
    const [result, setResult] = useState(null);

    function handleClick() {
        const convertedTemperature = (9 / 5) * temperature + 32;
        setResult(convertedTemperature.toFixed(2));
    }

    return (
        <>
            <div>
                <h3 className="font-bold text-center items-center flex-1 justify-center">
                    Q no 2: Convert Celsius to Fahrenheit
                </h3>
                <label className="text-center items-center flex-1 justify-center m-2 p-2">
                    Enter Your Temperature in (C):
                </label>
                <input
                    type="number"
                    value={temperature}
                    onChange={(e) => setTemperature(parseInt(e.target.value))}
                    className="m-2 p[0.5rem] text-black rounded-md p-2"
                />
                <br />
                <button
                    type="submit"
                    onClick={handleClick}
                    className=" border-4 rounded-2xl border-red-500 bg-gray-800 p-[10px] ml-[180px] mt-4"
                >
                    Convert To Fahrenheit
                </button>
                <br />
                <p className="ml-4 mt-2 font-semibold">The Temperature from Celsius to Fahrenheit is : {result}</p>
            </div>
        </>
    );
}

export default CelsiusToFahrenheit;
