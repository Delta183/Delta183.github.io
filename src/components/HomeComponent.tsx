import React from 'react';
import cat from '../resources/cat.jpeg';
import Button from 'react-bootstrap/Button';
import resumePDF from '../resources/Daniel Figueroa - Resume January 2023.pdf';

// When using any bootstrap from react-bootstrap, this import is a prerequisite
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/styles.css'

// functions in TS need "function" preceding them
function onResumeClick() {
    window.open(resumePDF);
  }

function HomeComponent() {
    
    return (
        
        <div>
            <div className='container'>
                {/* This is a preferable way of controlling the elements like with Swift */}
                <div className='row'>
                    {/* d-flex needs to be on whichever element requires grid work */}
                    <div className="mt-5 col d-flex justify-content-center">
                        <img src={cat} alt="cat" width={"300px"}/>
                    </div>
                </div>
                
                <div className='row'>
                    {/* d-flex needs to be on whichever element requires grid work */}
                    <div className="mt-1 col d-flex justify-content-center">
                        <div className='title' >Daniel Figueroa</div>
                    </div>
                </div>

               
                
                <div className='row'>
                    {/* d-flex needs to be on whichever element requires grid work */}
                    <div className="mt-1 col d-flex justify-content-center">
                        {/* <div className='subtitle' >Dreamer, Developer, Zoomer</div> */}
                        <Button variant="primary" onClick={onResumeClick}>My Resume</Button>{' '}
                    </div>
                </div>

                <div className='row'>
                    <div className="mt-1 col d-flex justify-content-center">
                        <div className='desc'>
                            I am a new Computer Science Graduate from Brock University and decided it is high time to make a website to compile
                            my projects and my thoughts. I like to keep things simple and always striving to improve. I do have a particular affinity
                            for web and mobile applications.
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="mt-1 col d-flex justify-content-start">
                        <div className='header'>
                            Projects
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="mt-1 col d-flex justify-content-start">
                        <div className='desc'>
                            <ul>
                                <li>WNHL Mobile Application</li>
                                <li>Rose Cottage Visiting Volunteers Mobile Applications</li>
                                <li>Luna Diary Mobile Application</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="mt-1 col d-flex justify-content-start">
                        <div className='header'>
                            Ideas for Upcoming Projects
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="mt-1 col d-flex justify-content-start">
                        <div className='desc'>
                            <ul>
                                <li>Fire Emblem Mod</li>
                                <li>TBA</li>
                                <li>TBA</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
          
        </div>
        );
  }
  
  export default HomeComponent;