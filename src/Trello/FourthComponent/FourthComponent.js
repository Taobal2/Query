import React from 'react'
import styled from "styled-components"
import {AiOutlinePlus} from "react-icons/ai"



export const FourthComponent = ({chn, text, img, note, naration}) => {
    return (
        <Container>
            <Wrapper chn={chn}>
                <WrapperImage src={img} />
                <WrapperContent>
                    <Header>{text}</Header>
                    <Title>{note}</Title>
                    <Desc>{naration}</Desc>
                    <Sub><span><AiOutlinePlus/></span>Learn more</Sub>
                </WrapperContent>
            </Wrapper>
        </Container>
    )
}


const Header=styled.div`
font-size:16px;
font-weight:500;
margin-bottom:15px;
`;
const Title=styled.div`
font-size:36px;
font-weight:500;
margin-bottom:15px;

`;
const Desc=styled.div`
font-size:20px;
color:#7a869a;
margin-bottom:30px;

`;
const Sub=styled.div`
font-size:24px;
color:#091e42;

span{
    font-size:18px;
    margin-right:10px;
}
`;
const WrapperImage=styled.img`
width:500px; 
height:350px;
object-fit: contain;



`;
const WrapperContent=styled.div`
width:600px;
color:black;

`;
const Container=styled.div`
width:100%;
display:flex;
justify-content:center;
color:white;
background-color:#FAFBFC;
`;
const Wrapper=styled.div`
width:85%;
display:flex;
justify-content:space-between;
flex-direction:${({chn})=> (chn ? "row-reverse" : "row"
    )};
    padding:40px 0;
`;

