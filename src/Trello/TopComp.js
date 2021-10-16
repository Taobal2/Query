import React from 'react'
import styled from "styled-components"
import img from "./Assets/trelloTop.png"

export const TopComp = () => {
    return (
        <Container>
        <Wrapper>
            <Content>
                <Title>Trello helps teams move work forward.</Title>
                <Desc>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</Desc>
                <Button>
                    <Input placeholder="Email"/>
                    <SignUp>Sign up-its free!</SignUp>
                </Button>
            </Content>
            <Image src={img}/>
        </Wrapper>
    </Container>
    )
}


const Image = styled.img`
width:420px;
height:550px;
object-fit:cover;
margin-right:30px;
`;
const Content = styled.div`
width:688px; 
margin-left:100px;

`;
const Title = styled.div`
font-size:48px;
color:#091e42;
font-family:Charlie Display, sans-serif;
margin-bottom:12px;
font-weight:550;
`;
const Desc = styled.div`
font-size:20px;
color:#091e42;
margin-bottom:40px;
`;
const Button = styled.div`
display:flex;
`;
const Input = styled.input`
margin-right:15px;
width:400px;
height:45px;
border-radius:5px;
border:0;
outline:none;


::placeholder {
    font-size:20px;
    padding-left:12px;
    
}
`;
const SignUp = styled.div`
width:250px;
height:45px;
border-radius:7px;
font-size:20px;
background-color:#0065FF;
display:flex;
align-items:center;
justify-content:center;
color:white;
transition:all 400ms;

:hover{
    cursor:pointer;
    background-color:#0051CC;

}
`;
const Container = styled.div`
width:100%;
min-height:100vh;
height:100%;
background-color:#ECE8FF;
padding-top:70px;
`;
const Wrapper = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:space-between;
align-items:center;
padding:40px 0;
`;