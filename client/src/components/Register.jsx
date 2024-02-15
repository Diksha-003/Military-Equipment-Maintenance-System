import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { register } from "../services/AdminService";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({name:"", phone: "", password: "" ,email:""});
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await register(formData);
            //localStorage.setItem("token", result.token);
            navigate("/");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    };

    

    return (
        <Container className="mt-5">
            <Row>
                <Col lg={6} className="mx-auto">
                    <h1 className="text-center mb-4 custom-label">Welcome to Tactical Gear Hub</h1>
                    <h3 className="text-center mb-4 custom-label">Register Here</h3>
                    <div className="box">
                    <Form onSubmit={handleSubmit} className="border p-4 rounded">
                        <Form.Group className="mb-3">
                            <Form.Label className="custom-label">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="custom-label">Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="custom-label">Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" name="email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="custom-label">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Register
                        </Button>


                    </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}