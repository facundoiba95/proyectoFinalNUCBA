import styled from "styled-components";

export const ContainerDefaultStyle = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
font-family:'Quicksand';
gap:10px;
background-color:${props => props.isFeed ? '#80808010' : 'none'};

.imgLeague{
    width:180px;
    height:180px;
    object-fit:contain;
    margin-bottom:1rem;
    /* position:absolute; */
}

.titleSeason{
    font-weight:100;
}

.titleFeed{
    font-family:'Red Hat Display';
    font-size:1.2rem;
    text-align:center;
    padding-top:20px;
}
.tricampeonTitle{
    font-family:'Orbitron';
    color:yellow;
}
`