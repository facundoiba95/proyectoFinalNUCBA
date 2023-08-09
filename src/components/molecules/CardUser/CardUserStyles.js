import { useSelector } from "react-redux";
import styled from "styled-components";

export const CardUserContainerStyle = styled.div`
width:90%;
max-width:800px;
min-width:350px;
height:100%;

img{
  width:40px;
  height:40px;
}
    .headerCardProfile{
        height:180px;
        width:100%;
        background-color:#ccc5b9;
        position:relative;
        margin-bottom:6rem;
        border-top-right-radius:5px;
        border-top-left-radius:5px;
    }

    .imgUserBackground{
        width: 100%;
        height: 100%;
        filter: blur(8px);
    }

    .imgUser{
        width:180px;
        height:180px;
        position:absolute;
        border-radius:50%;
        transform: translate(-50%);
        left: 20%;
        top:30%;
        object-fit:cover;
        padding:2px;
        background-color:white;
    }

    .infoUserProfile{
        width:90%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        gap:5px;
        text-align:left;
        margin:0 auto;

        li{
            height:30px;
            border-bottom:1px solid #232326;
        }
        p{
            display:flex;
            align-items:center;
            gap:10px;
        }

        b{
            color:#a8a8a8;
        }
    }

    h3{
       text-align:center;
       margin-top:1rem;
       margin-bottom:2rem;
    }

    .listBets{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:15px;
    }

    .itemListBets{
        width:100%;
        height:100%;
        border-bottom:1px solid #80808060;
        padding-bottom:10px;
        padding-left:10px;
      
    }
    .infoMatch{
        display:flex;
        flex-direction:column;
        gap:5px;
        align-items:center;
        padding-bottom:20px;
    }

    .teams{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:20px;
        margin:1.5rem 0;
        background-color:#80808010;
        padding:5px 0;

        p{
            text-align: center;
            width:300px;
        }
        .vs{
            text-align:center;
            width:100px;
        }
    }

    .teamHome{
        display: flex;
        justify-content:center;
        align-items:center;
        gap:5px;
    }
    .teamAway{
        display: flex;
        flex-direction: row-reverse;
        justify-content:center;
        align-items:center; 
        gap:5px;
    }

@media (max-width:850px) {
    .listBets{
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:15px;
    }
    .itemListBets{
        width:100%;
        border-bottom:1px solid #80808060;
        padding-bottom:10px;
        padding-left:10px;
    }
  
    
}

@media (max-width:650px) {
    .imgUser{
        left:50%;
    }
    .teams{
        p{
            text-align: center;
            width:150px;
        }
        .vs{
            text-align:center;
            width:30px;
        }
    }
    
}

`
