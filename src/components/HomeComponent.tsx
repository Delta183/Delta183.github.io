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
        
        <div>
            <div className='container-fluid'>
                <div className='headerComponent'>
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
                        <div className=" col d-flex justify-content-center">
                            <div className='header'>Email: danfigueroa81@gmail.com</div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        {/* d-flex needs to be on whichever element requires grid work */}
                        <div className="m-3 col d-flex justify-content-center">
                            {/* <div className='subtitle' >Dreamer, Developer, Zoomer</div> */}
                            <Button variant="primary" onClick={onResumeClick}>My Resume</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className="mt-1 col d-flex justify-content-center">
                        <div className='desc'>
                            Software Developer who enjoys making web and mobile applications.
                            <br/> 
                            Passionate about games, music and seeing the world.
                            <br/>
                            I like to keep things simple and always striving to improve.
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
                        <div className='list'>
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
                        <div className='list'>
                            <ul>
                                <li>Fire Emblem Mod</li>
                                <li>TBA</li>
                                <li>TBA</li>
                                <li>Fire Emblem Mod</li>
                                <li>TBA</li>
                                <li>TBA</li>
                                <li>Fire Emblem Mod</li>
                                <li>TBA</li>
                                <li>TBA</li>
                            </ul>
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