import React from 'react'
import styled from "styled-components"
import img1 from "./Assets/tag.svg"
import img2 from "./Assets/compass.svg"

export const FifthComponent = () => {
    return (
        <Container>
            <Wrapper>
                    <Section1>
                        <Image src={img1}/>
                        <Content>
                            <Title>See our pricing</Title>
                            <Desc>Whether you’re a team of 2 or 2,000, there’s a Trello tailor-made for your organization.
                            </Desc>
                            <Button1>Trello pricing</Button1>
                        </Content>
                    </Section1>
                    <Section2>
                        <Image src={img2}/>
                        <Content>
                            <Title>See our pricing</Title>
                            <Desc>Explore the world of boards and beyond in Trello. Dive deeper into our most popular features.
                            </Desc>
                            <Button1>Tour Trello</Button1>
                        </Content>
                    </Section2>
            </Wrapper>
        </Container>
    )
}

const Section2 = styled.div`
width:550px;
display:flex;

`;
const Section1 = styled.div`
width:520px;
display:flex;

`;
const Content = styled.div``;
const Title = styled.div`
font-size:24px;
font-weight:500;
margin-bottom:15px;
`;
const Desc = styled.div`
font-size:20px;
line-height:30px;
margin-bottom:25px;
`;
const Button1 = styled.button`
width:100px;
height:35px;
border:0;
outline:none;
width:150px;
height:40px;
border-radius:4px;
color:#0065FF;
border:1px solid #0065FF;
font-size:18px;
background-color:transparent;
transition:all 400ms;



:hover{
    cursor:pointer;
    color:white;
    background-color:#0065FF;
}
`;
const Image = styled.img`
// width:250px;
// height:150px;
object-fit:contain;
margin-right:30px;
// background-color:red;
`;
const Container = styled.div`
width:100%;
height:100%;
min-height:50vh;
backgound-color:#FAFBFC;
display:flex;
justify-content:center;
`;
const Wrapper = styled.div`
width:85%;
height:250px;
display:flex;
justify-content:space-between;
align-items:center;
border-top:1px solid black;
border-bottom:1px solid black;
margin:50px 0;

`;