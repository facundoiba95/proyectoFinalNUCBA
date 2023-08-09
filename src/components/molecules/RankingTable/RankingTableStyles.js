import styled from "styled-components";

export const ContainerTableStyle = styled.ul`
width:100%;
height:100%;
min-width:380px;
display:flex;
gap:10px;
flex-direction:column;
background-color:#333436;
border-radius:5px;

font-family:'Poppins';
font-weight:300;
margin:0 auto;

.tableContainer{
    width: 100%;
    max-width:800px;
    min-width:300px;
    height:100%;
    border:none;
    margin:0 auto;
}
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
    background-color:#575859;
}
.th:nth-child(n+3):nth-child(-n+7) {
    text-align:center;
}

.td{
    height:25px;
    padding:5px;
}



.td.team{
    display:flex;
    justify-content:left;
    align-items:center;
    gap:10px;
    height:100%;
}
.td.team img{
   width:20px;
   margin-right:10px;
}

@media (max-width:850px) {
    width:90%;
    min-width:380px;
    .tableContainer{
        width:90%;
        min-width:380px;
        padding-left:0px;
    }
    .td.team{
        small{
        width:120px;
        text-align:left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;      
        font-weight:300;  
    }
    }
    
}

`
export const ItemTableStyle = styled.li`
width:100%;
height:50px;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #242424;

.infoTeamRanking{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:300px;

    img {
        display:block;
        width:30px;
        object-fit:cover;
    }
    small{
        width:150px;
        text-align:left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;      
        font-weight:600;  
    }

}

.statsTeamRanking{
    display:flex;
    gap:10px;
    width:40%;
    justify-content:space-around;
    align-items:center;
    text-align:center;
}
`
export const TitleRankingStatsStyle = styled.span`
width:100%;
height:30px;
display:flex;
justify-content: flex-end;
align-items:center;
gap:10px;
font-family:'Red Hat Display';
background-color:#4f4e4e;
padding-right:5px;
`