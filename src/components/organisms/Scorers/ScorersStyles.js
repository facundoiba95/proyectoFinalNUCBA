import styled from "styled-components";
import { useParams } from "react-router-dom";
import { logoLeaguesByIdLeague } from "../../../libs/getLogosLeagues";

export const TableContainerStyles = styled.table`
width: 100%;
max-width:800px;
min-width:350px;
height:100%;
border:none;
/* background-color:#15161a10;*/
backdrop-filter: blur(80px); 
/* background-image: url(${() => logoLeaguesByIdLeague[useParams().idLeague]});  */
/* background-repeat: no-repeat;
background-position:100%;
background-size: contain; */
margin: 0 auto;

.headTable {
    /* background-color:red; */
    text-align:left;
}

.head{
    color:yellow;
    height:40px;
    background-color:none;
}

.th{
    padding-left:10px;
}

.td{
    height:30px;
    /* background-color:red; */
    padding:10px;
    border-bottom:1px solid gray;
}

.tr:nth-child(-n+3){
    background-color:#46c26720;
}

.tr:nth-child(1){
    font-weight:800;
}

.td.team{
    /* display:flex;
    justify-content:left;
    align-items:center;
    gap:10px; */
}
.td.team img{
   width:20px;
   margin-right:10px;
}

@media (max-width:850px){
    width:90%;
    min-width:380px;
    margin:0 auto;
}

`