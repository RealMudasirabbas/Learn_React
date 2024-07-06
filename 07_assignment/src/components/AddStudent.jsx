import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function AddStudent({ updateCount,updateCountFunc }) {
    const [student, setStudent] = useState({
        studentName: "",
        fatherName: "",
        grade: "",
        contactNo: 0,
    });

    const submitData = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://localhost:7026/api/add-student", {
                name: student.studentName,
                fatherName: student.fatherName,
                grade: student.grade,
                contactNo: student.contactNo,
            });
            
            
            // setStudent({
            //     studentName: "",
            //     fatherName: "",
            //     grade: "",
            //     contactNo: 0,
            // });

            updateCountFunc(updateCount + 1)

            

        } catch (error) {
            console.log(error);
        }
    };

    const handleInputs = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Form onSubmit={submitData}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                    type="text"
                    placeholder="Enter Student Name"
                    name="studentName"
                    value={student.studentName}
                    onChange={handleInputs}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFatherName">
                <Form.Control
                    type="text"
                    placeholder="Father Name"
                    name="fatherName"
                    value={student.fatherName}
                    onChange={handleInputs}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGrade">
                <Form.Control
                    type="text"
                    placeholder="Grade"
                    name="grade"
                    value={student.grade}
                    onChange={handleInputs}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContactNo">
                <Form.Control
                    type="number"
                    placeholder="Contact No"
                    name="contactNo"
                    value={student.contactNo}
                    onChange={handleInputs}
                />
            </Form.Group>

            <Button variant="btn btn-primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddStudent;
