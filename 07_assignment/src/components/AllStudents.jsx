import axios from "axios";
import React, { useState, useEffect } from "react";
import UpdateStudent from "./UpdateStudent";
import DeleteStudent from "./DeleteStudent";
import AddStudent from "./AddStudent";

function AllStudents() {
    const [students, setStudents] = useState([]);
    const [count, setCount] = useState(0);
    const [updateCount, setUpdateCount] = useState(1);
    const [id, setId] = useState(null);
    const [delId, setDelId] = useState(null);

    useEffect(() => {
        async function getAllStudents() {
            try {
                await axios
                    .get("https://localhost:7026/api/get-all-students")
                    .then((response) => {
                        console.log(response);
                        setStudents(response.data);
                    });
            } catch (error) {
                console.log(error);
            }
        }
        getAllStudents();
    }, [count,updateCount]);

    return (
        <>
        {updateCount && (
                <AddStudent
                    updateCount={updateCount}
                    updateCountFunc={setUpdateCount}
                />
            )}
            <table className="table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Father Name</th>
                        <th>Grade</th>
                        <th>Contact Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.fatherName}</td>
                            <td>{student.grade}</td>
                            <td>{student.contactNo}</td>
                            <td>
                                <button
                                    className="btn btn-warning mr-4"
                                    onClick={() => setId(student.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => setDelId(student.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {id && <UpdateStudent studentId={id} />}

            {delId && (
                <DeleteStudent
                    deleteId={delId}
                    count={count}
                    countFunc={setCount}
                />
            )}
        </>
    );
}

export default AllStudents;
