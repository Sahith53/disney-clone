import React from 'react'
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt="Logo One"/>
        <SignUp>GET  IT  ALL  THERE </SignUp>
        <Description>Disney+ offers a sleek, cinematic homepage featuring vibrant imagery from popular franchises like Marvel, Star Wars, and Pixar. The layout highlights new releases, trending content, and personalized recommendations through engaging carousels. </Description>
        <CTALogoTwo src='/images/cta-logo-two.png'/>
        </CTA>
        <BGImage />
      </Content>
    </Container>
  );
}
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;  

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BGImage = styled.div`
  background-image: url("/images/login-background.jpg");
  z-index: -1;
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;   
  `;

  const CTA = styled.div` 
  max-width: 650px;
  width: 1000%;
  display: flex;
  flex-direction: column;
  `

  const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height:1px;
    display: block;
    width: 100%;
    
  `
  const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0066ff;
    margin-bottom: 12px
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding : 16.5px;
    border: 1px solid transparent;
    border-radius: 5px;

    &:hover{
      background-color: #0483ee;
    }
  `
 const Description = styled.p`
 color: hsla(0, 0%, 95.3%, 1);
 font-size: 15px;
 line-height: 1.5;  /* Adjusted to 1.5 (unitless) for better readability */
 text-align: center; /* Centers the text */
 margin-bottom: 24px;
 letter-spacing: 1.5px; /* Optional margin for spacing */
`;
 
const CTALogoTwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`



export default Login; 