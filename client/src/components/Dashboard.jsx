import React from 'react';
import { Container, Button, } from 'react-bootstrap';
import { NavigationBar } from './NavigationBar';
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';


export function Dashboard() {
  const navigate = useNavigate();
    return (
        <>
          <NavigationBar/>
  
          <div className="cover">
          <div>
        <Container className="text-center mt-4" >
        <p className="header">Welcome to Tactical Gear Hub</p>
        <p className="lead" >Welcome to our Military Equipment Maintenance Management System, a robust platform designed to streamline and enhance the efficiency of military equipment maintenance operations.</p>
  
        <Button variant="success" size="lg" className="mt-3" onClick={() => {navigate('/request-registration')}}>
          Create Request
        </Button>
  
        <Container className="mt-5">
        
          {/* Add content about your services here */}
        </Container>
  
        <Container className="mt-5">
          
          {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapershome.com/images/pages/ico_h/8143.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapershome.com/images/pages/ico_h/8143.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          {/* Add more Carousel.Item as needed */}
        {/* </Carousel>  */}
          
        </Container>
      </Container>
      </div>
      </div>
      
      </>
    );
  }