import React from 'react';
import daniel from  '../resources/daniel.jpeg';
//import bgImage from '../resources/IMG_9957.JPG';
import Button from 'react-bootstrap/Button';
import resumePDF from '../resources/Daniel Figueroa - Resume January 2023.pdf';

// When using any bootstrap from react-bootstrap, this import is a prerequisite
import '../resources/styles.css'
import FooterComponent from './FooterComponent';
import CardComponent from './CardComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// functions in TS need "function" preceding them
function onResumeClick() {
    window.open(resumePDF);
  }

  function onProjectClick(link: string | URL) {
    window.open(link);
  }


const HomeComponent = () => {

   
    return (
        
        <div className='headerComponent'>
            <div className='container-fluid'>
                <div >
                    {/* This is a preferable way of controlling the elements like with Swift */}
                    <div className='row'>
                        {/* d-flex needs to be on whichever element requires grid work */}
                        <div className="mt-5 col d-flex justify-content-center">
                            <img src={daniel} alt="cat" width={"300px"}/>
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
                            <Button size="lg" variant="dark" onClick={onResumeClick}>My Resume</Button>{' '}
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
                           Very experienced with the MERN stack, TypeScript, SwiftUI, Python and Java.
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
                        <div onClick={() => onProjectClick("https://github.com/Delta183/Food-Tracker-TS")}>
                        <CardComponent
                            title={'Food Tracker Website'}
                            description={'A passion project that allows users to select foods from a food database. It displays comprehensive stats about the selections and allows them to save these meals for all users to peruse and refer to for their own health. Click the component to view repository.'}
                            langArray={['MongoDB', 'Node.js', 'Express.js', 'React', "TypeScript"]}                    
                        />
                        </div>
                        <CardComponent 
                            title={'WNHL Mobile Application (iOS and Android)'}
                            description={'A mobile app for tracking games and statistics of the Wednesday Night Hockey League and the services they provide with respect to their games.'}
                            langArray={['Swift','Java']}                    
                        />
                        <CardComponent 
                            title={'Rose Cottage Visiting Volunteers Mobile Applications (iOS and Android)'}
                            description={'Administrative site written in React that manages the database of both iOS and Android applications that allows users and admins alike to access the services of Rose Cottage more easily. Currently in progress.'}
                            langArray={['SwiftUI','Kotlin','React']}                    
                        />
                        <div onClick={() => onProjectClick("https://github.com/Delta183/Luna-Diary")}>
                         <CardComponent 
                            title={'Luna Diary Mobile Application (iOS)'}
                            description={'Mobile diary application which allows one to read, write, delete and update entries locally with a myriad of means to navigate many different dates for entries with the additional feature to export entries as PDFs. Click the component to view repository.'}
                            langArray={['SwiftUI']}                    
                        />
                        </div>
                        <div onClick={() => onProjectClick("https://github.com/Delta183/shoppies")}>
                         <CardComponent 
                            title={'OMDb Movie Nomination Website'}
                            description={'A website utilizing the OMDb API to provide a means to search for many movies and subsequently nominate them. Click the component to view repository.'}
                            langArray={['React', 'Typescript']}                    
                        />
                        </div>
                        <div onClick={() => onProjectClick("https://github.com/Delta183/testRateMyScholarReact")}>
                        <CardComponent
                            title={'Rate My Scholar Website'}
                            description={'A website that takes inspiration from RateMyProfessor but extends to scholars and staff alike. Click the component to view repository.'}
                            langArray={['React']}                    
                        />
                        </div>
                      
                    </Row>
                </Container>
              
                           

            {/* Second container end below */}
            </div> 
          <FooterComponent/>
        </div>
        );
  }
  
  export default HomeComponent;