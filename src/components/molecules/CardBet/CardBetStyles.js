import styled from "styled-components";

export const CardBetContainer = styled.div`
width:100%;
max-width:700px;
min-width:350px;
height:100vh;
display:flex;
flex-direction:column;
gap:2rem;
/* background-color:green; */


    /* background-color:red; */
    width:90%;

    .titleCard{
    font-size:1.2rem;
}

.teamsContainer{
    display:flex;
    justify-content:space-evenly;
    align-items:center;

    small{
        font-size:1.1rem;
    }
}

.team{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    gap:10px;
}

.imgTeam{
    width:80px;
    height:80px;
    object-fit:contain;
}

.nameTeam{
    font-size:1rem;
    height:40px;
    width:120px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
}

.matchDate{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.betButtonsContainer{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    gap:15px;
}

.buttonBet{
            width:150px;
            height:80px;
            border:none;
            padding: 0 10px;
            font-size:15px;
            border-radius:3px;
            background-color:#9acE22;
            cursor: pointer;
        }
.buttonBet:nth-child(2){
    background-color:#9acE50;
}

`