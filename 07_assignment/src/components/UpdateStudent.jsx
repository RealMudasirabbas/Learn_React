import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function UpdateStudent({studentId,countFunc,updateCountFunc}) {
    const stdId = studentId
    const [student, setStudent] = useState({
        name: "",
        fatherName: "",
        grade: "",
        contactNo: null,
    });

    
    
    useEffect(() => {
        async function getStudent() {
            try {
                await axios
                    .get(`http://localhost:8080/api/get-student?id=${stdId}`)
                    .then((response) => {
                        console.log(response);
                        // const newResponse = response.data
                        setStudent({
                            name: response.data.name,
                            fatherName: response.data.fatherName,
                            grade: response.data.grade,
                            contactNo: response.data.contactNo,
                            
                        });
                    });
            } catch (error) {
                console.log(error);
            }
        }
        getStudent();
    }, [stdId]);
    

    const handleInputs = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
            
        });
    };

    const submitData = async (e) => {
        e.preventDefault();
        try {
            await axios
                .put(`http://localhost:8080/api/update-student/${stdId}`, student
                )
                .then((res) => {
                    updateCountFunc(countFunc + 1)
                    console.log(res);
                })

        } catch (error) {
            console.log(error);
        }
        
    };





    return (
        <Form onSubmit={submitData}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                    type="text"
                    placeholder="Enter Student Name"
                    name="name"
                    value={student.name}
                    onChange={handleInputs}
                />
                <Form.Text className="text-muted"></Form.Text>
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

export default UpdateStudent;
