import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { NavigationBar } from './NavigationBar';
import "./AboutUs.css"

const blogData = [
  {
    id: 1,
    image: require('../assets/pic3.jpg'),
    
    title: 'Our Story',
    description: (
      <>
      Founded by a group of seasoned military veterans and skilled engineers, Tactical Gear Hub was born from a shared vision — a vision to redefine the landscape of military equipment maintenance. Grounded in principles of precision, efficiency, and safety, the founders set out to create an organization that would become synonymous with excellence in defense.<br/>
      The early days were not without challenges. Tactical Gear Hub faced skepticism and adversity, but the team persevered. Through rigorous training programs, strategic partnerships, and an unwavering commitment to continuous improvement, Tactical Gear Hub quickly gained recognition as a trusted ally in ensuring the readiness of military forces.<br/>
      At the core of Tactical Gear Hub's story is a relentless pursuit of innovation. Recognizing the evolving nature of modern warfare, the organization invested in cutting-edge technologies and methodologies. From state-of-the-art diagnostics to advanced maintenance protocols, Tactical Gear Hub became a trailblazer in the field, setting new standards for excellence<br/>
      
     </>
    ),
  },
  {
    id: 2,
    image: require('../assets/pic1.jpg'),
    
    title: 'Our Mission',
    description: (
      <>
      At Tactical Gear Hub, our mission is to ensure the operational readiness and effectiveness of military forces worldwide by providing unparalleled maintenance and support for military equipment. We are committed to delivering excellence in the upkeep, repair, and optimization of a diverse range of military assets, enabling armed forces to maintain a strategic edge in defense and security.<br/>
      We adhere to the highest standards of precision and technical expertise in maintaining military equipment, ensuring optimal performance and reliability in every operation.<br/>
      Our mission includes a steadfast commitment to safety protocols, ensuring that all maintenance activities prioritize the well-being of military personnel and the integrity of the equipment.<br/>
      We continuously seek innovative solutions and technologies to enhance the maintenance processes, introducing cutting-edge strategies to improve efficiency and effectiveness.<br/>
     </>
    ),
    
    
  },
  {
    id: 3,
    image: require('../assets/pic5.jpg'),
    
    title: 'Quality Assurance',
    description: (
      <>
      At Tactical Gear Hub, we understand the critical importance of ensuring the reliability and performance of military equipment.<br/>
    Our Quality Assurance (QA) practices are integral to our mission of delivering top-notch maintenance services  to our clients. Our QA practices strictly adhere to industry standards and regulations, ensuring that our maintenance processes meet or exceed the required specifications.<br/>
    We employ comprehensive testing protocols to evaluate the functionality and safety of military equipment. This includes both routine maintenance checks and thorough testing after maintenance procedures.<br/>
    Clients choose Tactical Gear Hub not only for our technical expertise but also for our unwavering commitment to delivering military equipment that meets the highest quality standards. Our QA practices are a testament to our dedication to excellence  and the trust our clients place in us.<br/>
     </>
    ),
     
    
   
    
  }
]
export function AboutUs(){
  return (
    <>
    <NavigationBar/>
    <section id="blog" className="block blog-block">
      <Container fluid>
      <div className="title-holder d-flex align-items-center justify-content-center mb-5">
      <div className="text-center">

        <h2 className='textcolor'>Know More About Us</h2>
        <div className="subtitle textcolor">Get our latest news from the blog</div></div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
    </>
  )
}


export default AboutUs;
