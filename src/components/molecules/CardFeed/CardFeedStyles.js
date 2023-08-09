import styled from "styled-components";

export const ContainerCardsFeedStyles = styled.ul`
width:90%;
max-width:900px;
min-width:350px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:40px;
margin:40px 0;

@media (max-width:850px) {
    gap:70px;
}
`


export const CardFeedContainerStyle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
border-radius:5px;
width:90%;
max-width:900px;
min-width:350px;
gap:10px;

background-color:${props => {
    switch (props.type){
        case 'newUser':
           return '#06d6a030'
        case 'newBet':
           return '#ffff0030'
        default:
           return '#80808010'
    }
}};

border:${props => {
    switch (props.type){
        case 'newUser':
            return '1px solid #06d6a090'
        case 'newBet':
            return '1px solid #ffff0090'
        default:
            return '1px solid #80808090'
    }
}};

height:${props => {
    switch (props.type){
        case 'newUser':
            return '80px'
        case 'newBet':
            return '150px'
        default:
            return '150px'
    }
}};

.imgUser{
    width:${props => {
        switch (props.type){
        case 'newUser':
            return '50px'
        case 'newBet':
            return '50px'
        default:
            return '130px'
    }
    }};
    height:${props => {
        switch (props.type){
        case 'newUser':
            return '50px'
        case 'newBet':
            return '50px'
        default:
            return '130px'
    }
    }};
    object-fit:cover;
    border-radius:50%;
    padding:2px;
    background-color:white;
    position:absolute;
    top:${props => {
        switch (props.type){
        case 'newUser':
            return '15px'
        case 'newBet':
            return '50px'
        default:
            return '130px'
    }
    }};
    left:${props => {
        switch (props.type){
        case 'newUser':
            return '-25px'
        case 'newBet':
            return '-25px'
        default:
            return '130px'
    }
    }};
}

.newData{
    position:absolute;
    top: 10px;
    right:10px;
    font-weight:800;
}
.timeToNew{
    position:absolute;
    top:35px;
    right:10px;
}

.infoTeams{
    display:flex;
    justify-content:center;
    align-items:center;
}

.teamsContainer{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
}
.team{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
}
.nameTeam{
    width:150px;
    text-align:center;
}
.imgTeam{
    width:35px;
    height:35px; 
}


@media (max-width:850px) {
    justify-content:flex-end;
    padding-bottom:20px;
    width:90%;
    height:${props => {
    switch (props.type){
        case 'newUser':
            return '120px'
        case 'newBet':
            return '220px'
        default:
            return '150px'
    }
}};
    .infoTeams{
        width:100%;
    }
    .newData{
        background-color:white;
        padding:2px;
        top:-10px;
        border-radius:3px;
        color:black;
        border:1px solid white;
    }
    .imgUser{
        top:-25px;
        left:50%;
        transform: translate(-50%)
    }
    .timeToNew{
        top:20px;
    }
    .teamsContainer{
        width:100%;
        flex-direction:column;
        gap:5px;
    }
   
    .team:nth-child(3){
        flex-direction:row-reverse;
    }
    .nameTeam{
        text-align:left;
    }
   

    
}


`