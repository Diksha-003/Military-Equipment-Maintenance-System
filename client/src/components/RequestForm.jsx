import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { saveRequest } from "../services/RequestService";
import { NavigationBar } from "./NavigationBar";
import "./Requests.css"

export function RequestForm() {
    const [formData, setFormData] = useState({ product: "", part: "", address: "", comments: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await saveRequest(formData);
            setFormData({ product: "", part: "", address: "", comments: "" });
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
            }, 1500);
            console.log(result.message);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavigationBar />
            <Container className="mt-4">
                <h2 className="display-4 text-center center">Create New Request</h2>

                <Form className="mt-4" onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label className="label">Product :</Form.Label>
                                <Form.Control type="text" value={isSubmitted ? formData.product : null} placeholder="Enter Product" name="product" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label className="label">Part Name :</Form.Label>
                                <Form.Control type="text" value={isSubmitted ? formData.part : null} placeholder="Enter Part name" name="part" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label className="label">Address :</Form.Label>
                                <Form.Control type="text" value={isSubmitted ? formData.address : null} placeholder="Enter your address" name="address" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label className="label">Comments :</Form.Label>
                                <Form.Control type="text" value={isSubmitted ? formData.comments : null} placeholder="Add comments" name="comments" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Button variant="primary" type="submit" className="mb-3">Register</Button>
                        </Col>
                    </Row>
                </Form>
                {isSubmitted && (
                    <Row className="mt-3">
                        <Col lg={6}>
                            <Alert variant="success">
                                <h6>Request Created Successfully</h6>
                            </Alert>
                        </Col>
                    </Row>
                )}
            </Container>
        </>
    );
}