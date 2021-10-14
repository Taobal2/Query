import React, {useState, useEffect} from "react";
import styled from "styled-components";
import image from "../mediaQuery/githubdesktop-icon.svg";
import  {IoMdArrowDropdownCircle} from "react-icons/io"
import  {BiBell} from "react-icons/bi"
import {AiOutlinePlus, AiOutlineMenu} from "react-icons/ai"
import SideBar from "./SideBar"
import Animation from "react-reveal/Fade"


export const Header = () => {

    const [toggle, setToggle]=useState(false);

    const onToggle = () => {
        setToggle(!toggle)
    }

    return(
        <MenuContainer>
              <Container>
                <First>
                    <Logo src={image}/>
                    <Search>
                        <Input placeholder = "search or jump to..."/>
                        <Icon>/</Icon>
                    </Search>
                        <Navigation>
                           <Nav>Pull requests</Nav>
                           <Nav>Issues</Nav>
                           <Nav>Marketplace</Nav>
                           <Nav>Explore</Nav>
                        </Navigation>
                </First>
                <Last>
                    <Navigation1>
                           <Nav1><BiBell/></Nav1>
                           <Nav1>
                               <AiOutlinePlus style={{
                                   marginRight:"5px"
                               }}/>
                               <IoMdArrowDropdownCircle/>
                            </Nav1>
                           <Nav1>circle</Nav1>
                    </Navigation1>
                </Last>
                <MediaScreen>
                <Menu 
                onClick={()=>{
                    console.log(toggle)
                    onToggle()
                }}
                ><AiOutlineMenu/></Menu>
                <Logo src={image} />
                <Bell><BiBell/></Bell>
            </MediaScreen>

        </Container>
        
        <Animation top when={toggle}>
             <SideBar setToggle={setToggle} toggle={toggle}/>

        </Animation>
        </MenuContainer>
      
    )
}

const MenuContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
`;
const MediaScreen = styled.div`
display:none;

@media screen and (max-width:800px){
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
`;
// const Nav = styled.div`
// `;
const Menu = styled.div`
font-size:30px;

`;
const Bell = styled.div`
margin-right:30px;
font-size:30px;
`;
// const Last = styled.div`
const Last = styled.div`
margin-right:30px;

`;
const Search = styled.div`
display:flex;
align-items:center;
width:280px;
background-color:#24292F;
margin:0 15px;
height:28px;
border-radius:4px;
border: 1px solid grey;

`;
const Icon = styled.div`
width:20px;
height:20px;
border-radius:3px;
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
margin-right:5px;
border:1px solid grey;
color:grey;
`;
const Input = styled.input`
padding-left:10px;
font-size:15px;
outline:none;
border:0;
background-color:transparent;
flex:1;
height:100%;
border-radius:4px;
font-weight:bold;


// ::placeholder{
//     color:white;
// }
`;
const First = styled.div`
display:flex;
align-items:center;
margin-left:30px;

@media screen and (max-width:800px){
    display:none;
}
`
const Navigation = styled.div`
display:flex;
align-items:center;
`
const Navigation1 = styled.div`
display:flex;
align-items:center;


@media screen and (max-width:800px){
    display:none;
}
`
const Nav = styled.div`
margin:0 10px;
font-size:14px;


:hover{
    opacity:0.6;
    cursor:pointer;
}
`;
const Nav1 = styled.div`
margin:0 10px;
font-size:20px;
width:50px;
height:50px;
color:white;
display:flex;
justify-content:center;
align-items:center;

:hover{
    opacity:0.6;
    cursor:pointer;
}
`;
const Logo = styled.img`
width:50px;
height:80px;
display:flex;
align-items:center;
// background-color:red;
object-fit:contain;


`;
const Container = styled.div`
width:100%;
height:80px;
background-color:#24292F;
color:white;
display:flex;
align-items:center;
justify-content:space-between;

// @media screen and (max-width:1000px){
//     width:100%;
//     display:flex;
//     justify-content:space-between;
// }
`;

