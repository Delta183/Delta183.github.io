import React from "react";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface IProps {
    title: string;
    description: string;
    langArray: string[];
}

const CardComponent = (props: IProps) => {

    return(
        <div>
            
            <Card 
                className="mb-4"
                bg="dark"
                key="dark"
                text="light"
                >
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Container fluid>
                        <Row xs="auto" className="justify-content-md-start">
                        {props.langArray.map((lang) => {
                            return (
                                <Col md="auto">
                                    <Badge bg="secondary" text="light">
                                        {lang}
                                    </Badge>
                                </Col>
                            );
                        })}
                        </Row>
                        </Container>
                    
                </Card.Footer>
            </Card>
        </div>
    );
}

export default CardComponent;