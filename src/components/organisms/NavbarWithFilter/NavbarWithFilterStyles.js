import styled from "styled-components";
import Select from 'react-select';

export const NavbarFilterContainerStyles = styled.nav`
width:100%;
height:50px;
position:fixed;
top:70px;
background-color:#2e2e2e10;
backdrop-filter: blur(10px);
display: flex;
justify-content:center;
align-items:center;
gap:50px;
z-index: 1000;

.submenuIcon{
  display:none;
}
.containerItemsNavbarFilter{
  display:flex;
  gap:50px;
}


@media (max-width:850px) {
  justify-content: right;
  padding-right:10px;


  .containerItemsNavbarFilter{
  position:absolute;
  top:50px;
  background-color:#2e2e2e;
  visibility: ${props => props.isOpenSubmenu ? 'visible' : 'hidden'};
  opacity:${props => props.isOpenSubmenu ? '1':'0'};
  flex-direction:row;
  width:${props => props.isOpenSubmenu ? '100%' : '0'};
  height:30px;
  justify-content:space-evenly;
  align-items:center;
  transition: all 0.2s ease-in-out;
  height:40px;
  
}
.submenuIcon{
  display:block;
  width:25px;
  height:25px;
  cursor: pointer;
}
}
`

export const SelectStyles = styled(Select)`
width:200px;
`
export const customStylesSelect = {
    menu: (provided, state) => ({
      ...provided,
      backgroundColor:'#2e2e2e',
      backdropFilter: 'blur(10px)',
      fontSize: '14px',
      padding: '8px',
    }),
    menuHover: ( provided,state ) => ({
        ... provided,
        backgroundColor:'red',
        
    }),
    menuPortal: ( provided, state ) => ({
      ... provided,
      backdropFilter: 'blur (10px)',
      backgroundColor:'green'
    }),
    control:( provided, state) => ({
      ... provided, 
      backgroundColor: 'none',
      border: 'none',
    }),
    container: (provided,state) => ({
      ... provided,
      position: 'absolute',
      left:'100px'
    })
    ,
    singleValue : ( provided, state ) => ({
      ...provided,
      color:'white'
    }),
   
  };
