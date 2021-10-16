import React from 'react'
import styled from "styled-components"
import logo from "./Assets/Trello.jpg"

export const Header = ({bg}) => {
    return (
        <Container bg={bg}>
            <Wrapper>
                    <Logo src={logo}/>
                    <Register>
                        <Button1>Log in</Button1>
                        <Button2>Sign up</Button2>
                    </Register>
            </Wrapper>
        </Container>
    )
}


const Logo = styled.img`
width:130px;
height:30px;
object-fit: contain;
margin-left:15px;
`;
const Register = styled.div`
margin-right:15px;
display:flex;

`;
const Button1 = styled.div`
width:80px;
height:35px;
border-radius:4px;
background-color:transparent;
color:#0051CC;
margin-right:10px;
font-size:18px;
display:flex;
justify-content:center;
align-items:center;
transition:all 500ms;

:hover{
    text-decoration:underline;
    cursor:pointer;
}
`;
const Button2 = styled.div`
width:80px;
height:35px;
border-radius:4px;
background-color:#0065FF;
color:white;
font-size:18px;
font-weight:bold;
display:flex;
justify-content:center;
align-items:center;
transition:all 500ms;


:hover{
    cursor:pointer;
    background-color:#0051CC;

}
`;
const Container = styled.div`
width:100%;
height:70px;
background-color:${({bg})=> (bg ? "white" : "#ECE8FF")};
position:fixed;
z-index:10;
`;
const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;
`;