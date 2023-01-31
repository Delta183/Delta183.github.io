import React from 'react';
import cat from '../resources/cat.jpeg';
//import bgImage from '../resources/IMG_9957.JPG';
import Button from 'react-bootstrap/Button';
import resumePDF from '../resources/Daniel Figueroa - Resume January 2023.pdf';

// When using any bootstrap from react-bootstrap, this import is a prerequisite
import '../resources/styles.css'
import FooterComponent from './FooterComponent';

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
                        <div className="mt-2 col d-flex justify-content-center">
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
                    <div className="mt-1 col d-flex justify-content-center">
                        <div className='header'>
                            Projects
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="mt-1 col d-flex justify-content-center">
                        <div className='list'>
                            <ul>
                                <li>WNHL Mobile Application (iOS and Android) - A navigational app for tracking games and statistics</li>
                                <li>Rose Cottage Visiting Volunteers Mobile Applications (iOS and Android)</li>
                                <li>Luna Diary Mobile Application (iOS)</li>
                                <li>OMDb Movie Nomination Website (React)</li>
                                <li>Rate My Scholar Website (React)</li>
                            </ul>
                        </div>
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
                        <div className='list'>
                           My proficiencies lie in frontend development of web applications and mobile applications.
                           <br/>
                           Significant experience with the React framework and experienced in SwiftUI and Java.
                        </div>
                    </div>
                </div>

            {/* Second container end below */}
            </div> 
          <FooterComponent/>
        </div>
        );
  }
  
  export default HomeComponent;