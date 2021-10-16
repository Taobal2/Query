import React from 'react'
import styled from "styled-components"
import img1 from "./Assets/apple.svg"
import img2 from "./Assets/google..svg"


export const ContactComponent = () => {
    return (
        <Container>
            <Wrapper>
                <Box>
                    <Content>      
                         <Text>Sign up and get started with Trello today. A world of productive teamwork awaits!
                         </Text>
                         <Register>
                         <Input placeholder="Email"/>
                         <Button>Sign up</Button>
                         </Register>
                    </Content>
                </Box>
               <NoteWrapper>
               <Note>
                    <Pusher>
                    <Sub>Trello also works great on your smaller screen.
                    </Sub>
                    <Image src={img1}/>
                    <Image src={img2}/>
                    </Pusher>
                </Note>
               </NoteWrapper>
            </Wrapper>
        </Container>
    )   
}

 
const Pusher=styled.div`
width:100%;
display:flex;
justify-content:flex-end;
align-items:center;
`;
const NoteWrapper=styled.div`
width:100%;
height:80px;
background-color:#f4f4f4;
display:flex;
align-items:center;
justify-content:center;



`;
const Image=styled.img`
object-fit:contain;
height:52px;
margin:0 5px;

:hover {
    cursor:pointer;
}
`;
const Note=styled.div`
width:82%;
height:60px;
display:flex;
align-items:center;
`;
const Sub=styled.div`
font-size:20px;
margin-right:25px;
`;
const Content=styled.div`
width:800px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;

`;
const Register=styled.div`
display:flex;
`;
const Box=styled.div`
width:82%;
height:300px;
border-radius:10px;
background-color:#455CBF;
color:white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-bottom:40px;
`;
const Text=styled.div`
font-size:24px;
font-weight:500;
line-height:32px;
margin-bottom:50px;
`;
const Input=styled.input`
border:0;
outline:none;
width:350px;
height:40px;
border-radius:5px;


::placeholder{
    font-size:20px;
    padding-left:10px;
}
`;
const Button=styled.button`
border:0;
outline:none;
width:150px;
height:40px;
border-radius:5px;
font-size:20px;
color:white;
background-color:#00bcdd;
transition:all 400ms;
margin-left:10px;

:hover{
    cursor:pointer;
    background-color:#0098B3;
}

`;
const Container=styled.div`
width:100%;
min-height:70vh;
height:100%;
background-color:#FAFBFC;
padding-top:50px;
`;
const Wrapper=styled.div`
width:100%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`;