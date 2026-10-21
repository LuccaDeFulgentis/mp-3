import styled, { createGlobalStyle } from "styled-components";

//I looked this up, This applies properties to the entire site rather then a div or item.
export const GlobalStyle = createGlobalStyle` 
    * {
        margin: 0;
        box-sizing: border-box;
    }
`;

export const PageWrapper=styled.div`
    background-color: #B4B8AB;
    width: 80%;
    margin: 0 auto;
    min-height: 100vh;

    h1,h2,h3,h4 {
        font-family: "Inconsolata", monospace;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        padding-bottom: 1%;
        font-variation-settings:
            "wdth" 100;
    }
`;

export const Container=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    min-height: 85vh;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        height: auto;
    }
`;

export const Footer = styled.footer`
    background-color:#333333;
    color: white;
    min-height: 5vh;
`;

export const Nav=styled.nav`
    width: 30%;
    background-color: #B4B8AB;


    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        padding:10%;
        
    }

    li {
        border: solid black 2px;
        text-align: center;
        padding: 5%;
        margin: 0 0 5% 0;
        background-color: #153243;

    }

    a {
        color: #EEF0EB;
        text-decoration: none;
        font-size: calc(2px + 2vw);
        
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        height: auto;

        ul {
            padding: 2% 10%;
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        li {
            border: solid black 2px;
            text-align: center;
            margin: 1%;
            padding: .5%;
        }

        a {
            color: beige;
            font-size: calc(2px + 1.0vw);
        }
    }
`;

export const Main=styled.main`
    background-color: #cbcec3;
    color:#122632;
    width: 70%;
    font-size: calc(2px + 1.5vw);
    text-align: center;
    padding: 1%;

    img{
    max-width: 30%;
    max-height: 30%;
    border: solid black 3px;
    margin-top:5%;
}
    @media screen and (max-width: 750px) {
        width: 100%;
        min-height: 80vh;
        font-size: calc(12px + 1vw);

        *{
            margin: 3%;
        }

        img {
            max-width: 80%;
            max-height: 50%;
        }
}
`;

export const Header = styled.header`
    background-color: #284B63;
    color: #EEF0EB;
    min-height: 10vh;
    padding: 2%;

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

export const Banner = styled.img` // && adds specificity
    && { max-width: 100%;
    max-height: 40%;
    border: solid black 0px;
    margin:0%;
    }

`;

export const List = styled.div`
    text-align: left;
    margin: 5%;
`;

export const Table = styled.table`
    margin: 10% auto;

    @media screen and (max-width: 750px) {
        margin: 10% auto;
    }
`;

export const CalculatorStyle = styled.div`
    background-color: #76874e;
    background-image: url("/camo.jpg");
    width: 80%;
    margin: 5% auto;
    padding: 5%;
    border: 2px solid #153243;
    text-align: center;
    box-sizing: border-box;
    font-family: "Black Ops One", system-ui;
    font-weight: 400;
    font-style: normal;

    #boxes {
    display: row;
    justify-content: center;
    margin: 5%;
    margin-bottom: 1%;
    }

    input{
        width: 40%;
        font-size: 20px;
    }

    button {
        padding: 10px 20px;
        margin: 5px;
        font-size: calc(2px + 1.0vw);
        color:#153243 ;

    }
    && h3 {
        font-size: calc(20px + 1vw);
        background-color: #76874e;
        margin-top: 4%;
    }
    && h1 {
        font-size: calc(20px + 1vw);
        background-color: #76874e;
        margin-top: 4%;
    }


.black-ops-one-regular {
  font-family: "Black Ops One", system-ui;
  font-weight: 400;
  font-style: normal;
}
`;