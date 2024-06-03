import React from "react";

function DisplayUserName() {
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Anna" },
        { id: 4, name: "Charlie" },
        { id: 5, name: "Alex" },
        { id: 6, name: "Eva" },
    ];

    const filteredUsers = users.filter(user => user.name.startsWith("A"));
    const mappedUsers = filteredUsers.map(user => (
        <li key={user.id}>My name is: {user.name}</li>
    ))

    return (
        <div>
            <h2>Users with Names starting with 'A'</h2>
            <ul>
                {mappedUsers}
            </ul>
        </div>
    )
}

export default DisplayUserName;
