import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteRequest, fetchRequests } from "../services/RequestService";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import format from "date-fns/format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./RequestList.css";


export function RequestsList() {
    const [students, setStudents] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedRoll, setSelectedRoll] = useState("");
    const navigate = useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    };
    const closeModalDialog = () => {
        setShowDialog(false);
    };

    async function populateStudentState() {
        try {
            const data = await fetchRequests();
            setStudents(data.students);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateStudentState();
    }, []);

    const handleStudentDelete = async () => {
        try {
            await deleteRequest(selectedRoll);
            populateStudentState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavigationBar />
            <Container>
                <div className="my-4">
                    <h1 className="display-4 text-center header">Your Active Requests</h1>
                </div>
                {students.length !== 0 ? (
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th className="tabcolor">Req Id</th>
                                <th className="tabcolor">Product Name</th>
                                <th className="tabcolor">Created Date</th>
                                <th className="tabcolor">Delivered Date</th>
                                <th className="tabcolor">Status</th>
                                <th className="tabcolor">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((s) => (
                                <tr key={s.reqId}>
                                    <td className="tabbcolor">{s.reqId}</td>
                                    <td className="tabbcolor">{s.product}</td>
                                    <td className="tabbcolor">{format(new Date(s.createdDate), "yyyy-MM-dd")}</td>
                                    <td className="tabbcolor">{format(new Date(s.deliveredDate), "yyyy-MM-dd")}</td>
                                    <td className="tabbcolor">{s.status}</td>
                                    <td className="tabbcolor">
                                        <Button
                                            variant="danger"
                                            onClick={() => {
                                                openModalDialog();
                                                setSelectedRoll(s.reqId);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faTrash} /> Delete
                                        </Button>{" "}
                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                navigate(`/edit/${s.reqId}`);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faEdit} /> Edit
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <Alert variant="success">
                        <h5>No request found </h5>
                    </Alert>
                )}

                <Modal show={showDialog} onHide={closeModalDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you really want to delete the request {selectedRoll}?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleStudentDelete}>
                            Yes
                        </Button>
                        <Button variant="danger" onClick={closeModalDialog}>
                            No
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}
