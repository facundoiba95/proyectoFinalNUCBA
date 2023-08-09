import styled from "styled-components";

export const FormContainerStyle = styled.form`
width:100%;
max-width:500px;
min-width:350px;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
gap:15px;
margin:0 auto;
font-family:'Red Hat Display';


    width:90%;
    
    input{
        width:180px;
        height:30px;
        border:none;
        border-radius:3px;
        padding-left:5px;
    }
    
    .imgContainer{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:10px;
     

        img{
        width:200px;
        height:200px;
        margin:0 auto;
        object-fit:contain;
        border-radius:3px;
    }
    }


`