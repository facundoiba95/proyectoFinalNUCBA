import styled from "styled-components";

export const NavLeaguesStyle = styled.nav`
width:100%;
height:50px;
background-color:#2e2e2e10;
backdrop-filter: blur(10px);
margin-top: 0rem;
display:flex;
justify-content:space-around;
align-items:center;
position:fixed;
top:70px;
z-index:1000;

@media (max-width: 850px) {
    width:100%;
    justify-content:flex-start;
    overflow-x:scroll;
    gap:20px;
    padding-left:10px;
    padding-right:10px;

::-webkit-scrollbar {
  width: 100%;   
  height:5px;            /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: none;   
  height:5px;     /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: #80808090;    /* color of the scroll thumb */
  border-radius: 5px; 
  height:5px;      /* roundness of the scroll thumb */
 /* creates padding around scroll thumb */
}
}
`
export const NavLeaguesItemStyle = styled.li`
color:yellow;
font-family:'Teko';
font-weight:100;
font-size:1.1rem;
letter-spacing:.8px;
text-align:center;
cursor: pointer;


:hover{
    color:white;
}

@media (max-width:850px) {
    width:150px;
    white-space: nowrap;
}
`