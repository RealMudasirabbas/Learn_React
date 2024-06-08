import React from "react";

const Card = ({ children }) => {
    return (
        <div className=" py-4 m-4 max-w-xl rounded-xl text-white leading-1 ml-4 overflow-hidden shadow-lg bg-cyan-700">
            {children}
        </div>
    );
};

export default Card;
