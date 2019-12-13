import styled from "styled-components";
import React from "react";
import { CardTitle, CardText, Button } from 'reactstrap';
import background from "../assets/background.jpg";


const Container = styled.div`
    max-width: 100%;
    height: 100%;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    background-image:url(${background});
    background-repeat: no-repeat;
`;
const Photos = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    color: yellow;
    padding: 2em;
`;

const Image = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100%;

`;

const Title = styled.h1`
    padding-bottom: 2em;
`;

const TextContainer = styled.div`
    width: 75%;
`;

const HeaderContainer = styled

const StyledCard = props =>{
    return (
        <Container key = {props.id}>
            <Photos>
                <CardTitle><Title>{props.title}</Title></CardTitle>
                <Image><img src = {props.imgUrl} alt = {props.copyright} ></img></Image>
                <TextContainer>
                 <CardText> Date: {props.date}</CardText>
                    <CardText>{props.explanation} </CardText>
                </TextContainer>
                <Button>Test</Button>
            </Photos>
        </Container>
    );
};

export default StyledCard;


