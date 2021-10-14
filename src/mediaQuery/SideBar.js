import React from 'react'
import styled from "styled-components"

const SideBar = ({setToggle, toggle}) => {
    return (
        <Container>
            <Wrapper>
            <Search>
                        <Input placeholder = "search or jump to..."/>
                        <Icon>/</Icon>
                    </Search>
                <Navigation>
                    <Nav onClick={()=>{
                        console.log(toggle)
                        setToggle(false)
                    }}>Dashboad</Nav>
                    <Nav>Pull requests</Nav>
                    <Nav>Issues</Nav>
                    <Nav>Marketplace</Nav>
                    <Nav>Explore</Nav>
                    <Nav>codespaces</Nav>
                    <Nav>Sponsor</Nav>
                    <Nav>Settings</Nav>
                </Navigation>
            </Wrapper>
        </Container>
    )
}

export default SideBar
const Search = styled.div`
display:flex;
align-items:center;
width:95%;
background-color:#24292F;
margin:0 15px;
height:28px;
border-radius:4px;
border: 1px solid grey;
margin-bottom:10px;

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
`;
const Navigation = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
const Nav = styled.div`
width:95%;
padding:10px;
border-top: 1px solid grey;
// border-bottom: 1px solid grey;

:hover{
    cursor:pointer;
}
`;
const Container = styled.div`
display:none;


@media screen and (max-width:800px){
    width:100%;
    height:400px;
    background-color:#24292F;
    color:white;
    display:flex;

}
`;


const Wrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
`;
