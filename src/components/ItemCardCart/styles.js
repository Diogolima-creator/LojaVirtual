import styled from "styled-components";

export const Container = styled.div`
    padding-top:0px;

    .Totalvalue{
            height:15px;
            padding:5px;
            font-size:14px;
            font-weight: normal;
        }
`;
export const Text = styled.h1`  
        background-color:black;
        margin: 0;
        text-align:center;
        color:white;
`;

export const Card = styled.div`
    border: 2px solid black;
    display:block;
    color:black;
    padding:5px;
    text-align:left;
    font-size:18px;
    font-weight: bold;
    padding-left:10px;

    &:hover{
        border: 2px solid black;
        background-color: #ffb3b3;
        opacity: .9;
    }

    &:hover button{
        background-color: black;
        opacity: 1;
    }

    button{
        border:none;
        cursor:pointer;
        color:white;
        background-color:black;
        border-radius:5px;

    }

    button:hover{
        opacity: .8;
    }

    p{
        color: black;
        text-align:left;
    }

`;

