import React from "react";

function AmpercentConditionals() {
    let userStatus = true;
    const user = {
        name: "Shoaib",
        age: 25,
        gender: "male",
        nationality: "Pakistani",
        isEmployed: "false",
    };
    return (
        <div>
            {userStatus && (
                <>
                    <h1>User Name: {user.name}</h1>
                    <p>User Age: {user.age}</p>
                    <p>User Gender: {user.gender}</p>
                    <p>User Employed: {user.isEmployed}</p>
                </>
            )}
            
        </div>
    );
}

export default AmpercentConditionals;
