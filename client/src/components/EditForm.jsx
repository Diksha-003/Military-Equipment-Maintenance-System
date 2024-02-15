import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchRequestById, updateRequest } from "../services/RequestService";
import { NavigationBar } from "./NavigationBar";
import "./Requests.css";

export function EditForm() {
    const params=useParams();
    const [formData, setFormData] = useState({ product: "", part: "", address: "", comments: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result=await updateRequest(formData,params.roll);
            console.log(result);
            setIsSubmitted(true);
        } catch (error) {
            console.log(error);
        }
    };

    const populateStudentState = async () => {
        try {
            const result=await fetchRequestById(params.roll);
            console.log(result);
            setFormData(result.student);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        populateStudentState();
    }, []);

    return (
        <>
            <NavigationBar />
            <Container className="mt-4">
                <h2 className="center">Update Your Request</h2>
                {formData ? (
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Product:</Form.Label>
                                    <Form.Control type="text" value={formData.product} placeholder="Enter product name" name="product" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Part Name:</Form.Label>
                                    <Form.Control type="text" value={formData.part} placeholder="Enter part name" name="part" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Address:</Form.Label>
                                    <Form.Control type="text" value={formData.address} placeholder="Enter your address" name="address" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Comments:</Form.Label>
                                    <Form.Control type="text" value={formData.comments} placeholder="Add comments" name="comments" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" className="mt-3">
                            Update
                        </Button>
                    </Form>
                ) : (
                    <p className="text-center mt-3">No data found for the given roll number.</p>
                )}

                {isSubmitted && (
                    <Row className="mt-3">
                        <Col lg={6} className="mx-auto">
                            <Alert variant="success" className="text-center">
                                Request Updated Successfully
                            </Alert>
                        </Col>
                    </Row>
                )}
            </Container>
        </>
    );
}
