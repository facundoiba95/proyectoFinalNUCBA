import styled from "styled-components";

export const CardContainerStyle = styled.li`
width:100%;
max-width:700px;
min-width:350px;
height:75px;
background-color:#29292b;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
font-family:'Red Hat Display';
cursor: pointer;

.containerTeam{
    display:flex;
    gap:20px;
}


.containerTeam img {
    width:35px;
    height:35px;
    object-fit:contain;
    border-radius:none;
}

.dateMatch{
 position:absolute;
 width:80px;
 left:10px;
 top:5px;
 font-size:0.8rem;
 text-align:center;
 font-weight:100;
}

.teamsMatchHome{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    text-align:left;
    gap:20px;
    width:150px
}

.teamsMatchAway{
    display:flex;
    flex-direction:row-reverse;
    justify-content:flex-start;
    align-items:center;
    text-align:right;
    gap:20px;
    width:150px
}

.containerBets{
    position:absolute;
    right:0;
    top:5px;
    padding-right:15px;
}
.status{
    width:100px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    span{
        display:flex;
        gap:10px;
        font-weight:600;
    }
}

.progress {
    background-color: ${props => props.status == 'LIVE' ? 'yellowgreen' : props.status == 'FINISHED' ? 'red' : props.status == 'PAUSED' ? 'orange' : 'none'};
    color:white;
    text-align:center;
    font-size:0.7rem;
    font-weight: 900;
    margin-top:0.5rem;
}
.goBet{
    background-color:${props => props.isBet == 'Apostar' ? 'yellow' : ''};
    position:absolute;
    bottom:10px;
    width:auto;
    padding:2px;
    border-radius:3px;
    right:20px;
    color:black;
    font-weight:600;
}

@media (max-width:850px) {
    height:170px;
    width:95%;
    
    .dateMatch{
        transform: translate(-50%);
        left:50%;
    }

    .containerTeam{
      gap:10px;
    }

    .teamsMatchHome, .teamsMatchAway{
        flex-direction:column;
        justify-content:flex-end;
        align-items:center;
        text-align:center;
        gap:10px;
        width:120px;
    }
    .nameTeam{
        text-align:center;
        width:120px;
        white-space: break-spaces;
    }

    .goBet{
        transform: translate(-50%);
        left:50%;
        width:80px;
        text-align:center;
    }
}

@media (max-width: 768px) {
}
`