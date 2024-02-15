import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../services/AdminService";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ phone: "", password: "" });
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(formData);
            localStorage.setItem("token", result.token);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    };

    

    return (
        <Container className="mt-5">
            <Row>
                <Col lg={6} className="mx-auto">
                    <h1 className="text-center mb-4 custom-label">Tactical Gear Hub</h1>
                    <div className="box">
                    <Form onSubmit={handleSubmit} className="border p-4 rounded">
                        <Form.Group className="mb-3">
                            <Form.Label className="custom-label">Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="custom-label">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Login
                        </Button>

                        <Button variant="success" onClick={() => {
                                                navigate(`/register`);
                                            }} className="w-100 mt-2">
                            Register
                        </Button>
                    </Form>
                    </div>
                    {loginError && <Alert variant="danger" className="mt-3 text-center">Invalid phone or password</Alert>}
                </Col>
            </Row>
        </Container>
    );
}
