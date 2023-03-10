import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';



function FooterComponent() {
    return (
      // For the icons of MDBIcon: https://mdbootstrap.com/docs/react/content-styles/icons/
        <div>
           <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-1'>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/deltaredrum/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/daniel-figueroa-a21365240/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Delta183' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
          <div className='text-center'>
              danfigueroa81@gmail.com
          </div>
        </section>
      </MDBContainer>

     
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023. Daniel Figueroa. All rights reserved.
      </div>
      
    </MDBFooter>
        </div>
        );
  }
  
  export default FooterComponent;