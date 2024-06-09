import React, { useState } from "react";

const RemoveACharacter = () => {
    const [str, setStr] = useState("")
    const [removeChar, setRemoveChar] = useState("");
    const [result, setResult] = useState("");

    function handleClick() {
        const findChar = str.indexOf(removeChar);
        const selectChar = str.replace(str[findChar], '');
        setResult(selectChar)
    }

    return (
        <>
            <h3 className="font-bold text-center items-center flex-1 justify-center">
                
                Q no 4: Remove Character From A String
            </h3>
            <label className="text-center items-center flex-1 justify-center m-2 p-2">
                Enter your word:
            </label>
            <input
                type="text"
                value={str}
                onChange={(e) => setStr(e.target.value)}
                className="m-3 p[0.7rem] text-black rounded-md p-2"
            />
            <br />
            <label className="m-[0.3rem]">
                Enter your character:
            </label>
            <input
                type="text"
                value={removeChar}
                onChange={(e) => setRemoveChar(e.target.value)}
                className="m-2 p[0.7rem] rounded-md text-black p-2"
            />
            <br />
            <button
                type="submit"
                onClick={handleClick}
                className=" border-4 rounded-2xl border-red-500 bg-gray-800 p-[10px] ml-[150px] mt-4"
            >
                Click me to Remove
            </button>
            <br />
            <p className="ml-4 mt-2 font-semibold">
                Here is the Result: {result}
            </p>
        </>
    );
};

export default RemoveACharacter;
