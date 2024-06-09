import React, { useState } from "react";

const CheckMultiples = () => {
    const [checkMultiple, setCheckMultiple] = useState(null);
    const [result, setResult] = useState("");

    function handleClick() {
        if (checkMultiple < 0) {
            setResult('Please provide a positive Number');
        } else if (checkMultiple > 0 && checkMultiple % 3 == 0 && checkMultiple % 7 == 0) {
            setResult('Yes! It is multiple of 3 and 7');
        } else if (checkMultiple > 0 && checkMultiple % 3 == 0) {
            setResult('Yes, It is multiple of : 3');
        } else if (checkMultiple > 0 && checkMultiple % 7 == 0) {
            setResult('Yes It is multiple of : 7');
        } else {
            setResult('It is not multiple of either 3 or 7');
        }
    }

    return (
        <>
            <h3 className="font-bold text-center items-center flex-1 justify-center m-4">
                Q no 7: Check Multiples of 3 and 7
            </h3>
            <label className="text-center items-center flex-1 justify-center m-2 p-2">
                Enter your word:
            </label>
            <input
                type="number"
                value={checkMultiple}
                onChange={(e) => setCheckMultiple(parseInt(e.target.value))}
                className="m-3 p[0.7rem] text-black rounded-md p-2"
            />
            <br />

            <button
                type="submit"
                onClick={handleClick}
                className=" border-4 rounded-2xl border-red-500 bg-gray-800 p-[10px] ml-[150px] mt-4"
            >
                Click me to To Check
            </button>
            <br />
            <p className="ml-4 mt-2 font-semibold">
                Here is the Result: {result}
            </p>
        </>
    );
};

export default CheckMultiples;
