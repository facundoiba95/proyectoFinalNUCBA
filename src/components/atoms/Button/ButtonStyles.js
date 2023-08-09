import styled from "styled-components";

export const ButtonStyle = styled.button`
width:120px;
height:30px;
border: 1px solid gray;
text-align:center;
background-color:transparent;
margin: 0 auto;
color:white;
border-radius:3px;
display:flex;
justify-content:center;
align-items:center;
cursor: pointer;
font-family:'Red Hat Display';

:active{
    font-weight:600;
    border:2px solid gray;
}
`