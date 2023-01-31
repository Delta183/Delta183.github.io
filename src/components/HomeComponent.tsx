import React from 'react';
import cat from '../resources/cat.jpeg';
//import bgImage from '../resources/IMG_9957.JPG';
import Button from 'react-bootstrap/Button';
import resumePDF from '../resources/Daniel Figueroa - Resume January 2023.pdf';

// When using any bootstrap from react-bootstrap, this import is a prerequisite
import '../resources/styles.css'
import FooterComponent from './FooterComponent';
import CardComponent from './CardComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// functions in TS need "function" preceding them
function onResumeClick() {
    window.open(resumePDF);
  }

function HomeComponent() {
    
    return (
        
        <div className='headerComponent'>
            <div className='container-fluid'>
                <div >
                    {/* This is a preferable way of controlling the elements like with Swift */}
                    <div className='row'>
                        {/* d-flex needs to be on whichever element requires grid work */}
                        <div className="mt-5 col d-flex justify-content-center">
                            <img src={cat} alt="cat" width={"300px"}/>
                        </div>
                    </div>
                    
                    <div className='row'>
                        {/* d-flex needs to be on whichever element requires grid work */}
                        <div className="col d-flex justify-content-center">
                            <div className='title' >Daniel Figueroa</div>
                        </div>
                    </div>

                  
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    
                </div>
                <div className='row'>
                        {/* d-flex needs to be on whichever element requires grid work */}
                        <div className="mb-3 col d-flex justify-content-center">
                            {/* <div className='subtitle' >Dreamer, Developer, Zoomer</div> */}
                            <Button variant="dark" onClick={onResumeClick}>My Resume</Button>{' '}
                        </div>
                    </div>
                <div className='row'>
                    <div className="mt-1 col d-flex justify-content-center">
                        <div className='header'>
                            About Me
                        </div>
                        
                    </div>
                </div>
                <div className=" col d-flex justify-content-center">
                        <div className='desc'>
                            Bachelor in Computer Science who enjoys making web and mobile applications.
                            <br/> 
                            Passionate about games, music and seeing the world.
                            <br/>
                            I like to keep things simple and always striving to improve.
                        </div>
                    </div>
                    <div className='row'>
                    <div className=" col d-flex justify-content-center">
                        <div className='header'>
                            Skills
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="mb-3 col d-flex justify-content-center">
                        <div className='desc'>
                           My proficiencies lie in frontend development of web applications and mobile applications.
                           <br/>
                           Very experienced with the React, SwiftUI and Java.
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="mb-2 col d-flex justify-content-center">
                        <div className='header'>
                            Projects
                        </div>
                    </div>
                </div>
                  {/* Cards for the projects below */}
                  <Container fluid>
                    <Row>
                        <CardComponent 
                            title={'WNHL Mobile Application (iOS and Android)'}
                            description={'A navigational app for tracking games and statistics of the Welland Niagara Hockey League.'}
                            langArray={['Swift','Java']}                    
                        />
                        <CardComponent 
                            title={'Rose Cottage Visiting Volunteers Mobile Applications (iOS and Android)'}
                            description={'Administrative site written in React that manages the database of both iOS and Android applications that allows users and admins alike to access the services of Rose Cottage more easily.'}
                            langArray={['SwiftUI','Kotlin','React']}                    
                        />
                         <CardComponent 
                            title={'Luna Diary Mobile Application (iOS)'}
                            description={'Diary app with a myriad of means to navigate many different dates for entries with the ability to export entries as PDFs.'}
                            langArray={['SwiftUI']}                    
                        />
                         <CardComponent 
                            title={'OMDb Movie Nomination Website'}
                            description={'A website utilizing the OMDb API to provide a means to search for many movies and subsequently nominate them.'}
                            langArray={['React', 'Typescript']}                    
                        />
                         <CardComponent 
                            title={'Rate My Scholar Website'}
                            description={'A website that takes inspiration from RateMyProfessor but extends to scholars and staff alike.'}
                            langArray={['React']}                    
                        />
                    </Row>
                </Container>
              
                           

            {/* Second container end below */}
            </div> 
          <FooterComponent/>
        </div>
        );
  }
  
  export default HomeComponent;