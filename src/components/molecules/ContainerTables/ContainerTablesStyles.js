import styled from "styled-components";

export const TableContainerStyle = styled.ul`
display:grid;
grid-template-columns: ${props => props.isAll === true ? '1fr 1fr' : '1fr'};
width:100%;
max-width:800px;
min-width:300px;
height:100%;
margin:0 auto;
gap:20px;
text-align:center;


h1{
    background-color:green;
}

@media (max-width: 850px) {
grid-template-columns: 1fr;
width:90%;
min-width:380px;
align-content:center;
justify-content:center;
}
`