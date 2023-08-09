import styled from 'styled-components';

export const HeaderStyle = styled.header`
width:100%;
height: 70px;
background-color: #2E2E2D;
display:flex;
justify-content:space-between;
align-items:center;
color:white;
padding:0 30px;
margin-bottom: 4.5rem;
position:sticky;
top:0;
z-index:1200;

h1{
    font-family:'Orbitron';
    letter-spacing:2px;
    color:yellow;
    cursor:pointer;
    width:30%;
}

.menuIcon{
    display:none;
}
.headerContainer{
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
}

.registerButtons{
    display:${props => props.isLogged ? 'none' : 'flex'};
}

.iconsAccount{
    display:${props => props.isLogged ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;

    img{
        width:50px;
        height:50px;
        border-radius:50%;
        object-fit:cover;
        cursor: pointer;
    }
    
    h4{
        cursor: pointer;
    }
}
.btnLogout{
            width:100px;
            height:25px;
            border:none;
            border-radius:3px;
        }


@media (max-width:850px) {
    h1{
        position:absolute;
        left:50%;
        transform: translate(-50%)
    }
    .menuIcon{
        display:block;
        width: 30px;
        height:30px;
        transition:all 0.2s ease-in-out;
        transform:${props => props.isOpenMenu ? 'rotate(180deg)' : '0'};
        cursor: pointer;
    }
    .headerContainer{
        width:100%;
        display:${props => props.isOpenMenu ? 'flex' : 'none'};
        flex-direction:column;
        align-items:center;
        position:absolute;
        background-color:#80808030;
        backdrop-filter: blur(20px);
        left:0;
        top:70px;
        height:100vh;
    }
    
    .iconsAccount{
        align-items:center;
        justify-content:flex-start;
        padding-top:50px;
        width:100%;
        
        /* background-color:#80808090; */
        img{
            width:150px;
            height:150px;
        }


        .btnLogout{
            width:100px;
            height:25px;
            border:none;
            border-radius:3px;
        }
    }
    
    @media (max-width:600px) {
        h1{
            font-size:1.4rem;
        }
        
    }
}
`

export const HeaderListStyle = styled.ul`
width:30%;
height:100%;
display:flex;
justify-content: center;
align-items: center;
gap:20px;
font-family:'Poppins';

.registerHeaderBtn{
    background-color:gray;
    height:50%;
    padding: 0 5px;
    border-radius:3px;
    height:30px;
    width:100px;
}
.loginHeaderBtn{
    background-color:#9acd3280;
    height:50%;
    padding: 0 5px;
    border-radius:3px;
    height:30px;
    width:100px;
}

@media (max-width:850px) {
    flex-direction:column;
    justify-content:center;

    .registerHeaderBtn{
        height:40px;
        width:100px;
    }
    .loginHeaderBtn{
        height:40px;
        width:100px;
    }
}
`
export const HeaderItemStyle = styled.li`
height:100%;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;

:hover{
    font-weight:600;
}

@media (max-width: 850px) {
    height:50px;    
}
`
