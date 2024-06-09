import React, { useState } from "react";



function SumOfTwoNumbers() {
    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);
    const [result, setResult] = useState(null);

    function handleClick() {

        let sum = firstNumber + secondNumber
        setResult(sum);
    }

    return (
        
            <>
                <h3 className="font-bold text-center items-center flex-1 justify-center">
                    Q no 1: Sum Of Two Numbers</h3>

                <div className="m-4 p-4">
                    <h5 className="font-bold text-center items-center flex-1 justify-center">
                        Q no 1: Function that returns the square of a number
                    </h5>
                    <label className="text-center items-center flex-1 justify-center m-2 p-2">Enter the first number:</label>
                    <input
                        type="number"
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(parseInt(e.target.value))}
                        className="m-3 p[0.7rem] text-black rounded-md p-2"
                        />
                    <br />
                    <label className="m-[0.4rem]">Enter the second number:</label>
                    <input
                        className="m-2 p[0.7rem] rounded-md text-black p-2"
                        type="number"
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(parseInt(e.target.value))}
                    />
                    <br />
                    <button
                    onClick={handleClick}
                    className=" border-4 rounded-2xl border-red-500 bg-gray-800 p-[10px] ml-[225px] mt-4"
                    >Calculate</button>
                    <p className="">The sum of Two Numbers is: {result}</p>
                </div>
            </>
        
    );
}

export default SumOfTwoNumbers;
