import styled from "styled-components";

export const LoaderContainerStyle = styled.div`
height:100vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
backdrop-filter: blur(10px);
position: relative;
margin: 0 auto;

`

export const LoaderBoxContainerStyle = styled.div`
display:flex;
position:absolute;
flex-direction:column;
justify-content:center;
align-items:center;
height:400px;
width:360px;
gap:30px;
margin: 0 auto;


h2{
    font-family:'Poppins';
    font-size:1.5rem;
    letter-spacing: 8px;
}
`