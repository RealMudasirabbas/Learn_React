import React, { useState } from "react";

function Form() {
    let render = true
    const [person, setPerson] = useState({
        firstName: "sajid",
        lastName: "saeed",
        fatherName: "saeed ahmed",
        cnicNumber: "38101-49793141",
    });

    function handleClick(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div>
            <form>
                <label className="text-center items-center flex-1 justify-center m-2 p-2">
                    First Name:
                </label>
                <input
                        type="text"
                        name="firstName"
                        className="m-3 p[0.7rem] text-black rounded-md p-2"
                        value={person.firstName}
                        onChange={handleClick}
                    />
                <label className="text-center items-center flex-1 justify-center m-2 p-2">
                    Last Name:
                    
                </label>
                <input
                        type="text"
                        name="lastName"
                        className="m-3 p[0.7rem] text-black rounded-md p-2"
                        value={person.lastName}
                        onChange={handleClick}
                    />
                    <br />
                <label className="text-center items-center  justify-center m-2">
                    Father Name:
                </label>
                <input
                        type="text"
                        name="fatherName"
                        className="m-3 p[0.7rem] text-black rounded-md p-2"
                        value={person.fatherName}
                        onChange={handleClick}
                    />
                <label className="text-center items-center flex-1 justify-center m-2 p-2">
                    CNIC Number:
                    
                </label>
                <input
                        type="text"
                        name="cnicNumber"
                        className="m-3 p[0.7rem] text-black rounded-md p-2"
                        value={person.cnicNumber}
                        onChange={handleClick}
                    />
            </form>
            <p>{person.firstName}{person.lastName}{person.fatherName}{person.cnicNumber}</p>
        </div>
    );
}

export default Form;
