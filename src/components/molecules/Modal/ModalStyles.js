import styled from "styled-components";

export const ContainerModalAuthStyles = styled.div`
height:100%;
width:100%;
display:${props => props.isOpenModal ? 'flex' : 'none'};
justify-content:center;
align-items:center;
position:absolute;
top:0;
backdrop-filter: blur(10px);
transform: translate(-50%);
left:50%;
`

export const CardModalStyles = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
width:300px;
height:380px;
background-color:#00000099;
border-radius:3px;
position:relative;

h3{
    text-align:center;
    padding:0 20px;
}

.buttons{
    display:flex;
    gap:10px;
}

.closeModal{
    position:absolute;
    top:20px;
    width:20px;
    height:20px;
    background-color:red;
    cursor: pointer;
}
`