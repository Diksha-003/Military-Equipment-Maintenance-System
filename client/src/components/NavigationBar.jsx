import "./NavigationBar.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../utils/TokenUtil";
import { useNavigate } from "react-router-dom";

export function NavigationBar() {
    const navigate=useNavigate();
    const handleLogoutClick=()=>{
        logout();
        navigate("/");
    }
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" className="transparent">
            <Container>
                <Navbar.Brand href="#home">Tactical Gear Hub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/dashboard">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/request-list">
                            <Nav.Link>Request List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/request-registration">
                            <Nav.Link>Create Request</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/contactus">
                            <Nav.Link>ContactUs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/aboutus">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Button variant="success" size="sm" onClick={handleLogoutClick}>Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}