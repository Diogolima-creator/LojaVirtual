import styled from "styled-components";

export const Container = styled.div`
    .CartIcon {
        cursor:pointer;
        position:absolute;
    }
    
    .cartBall{
        overflow:hidden;
        position: relative;
        background-color: white;
        border-radius:30px;
        text-align:center;
        z-index: 1999;
        top: -8px;
        left: 14px;
        width: 15px;
        height: 15px;
        font-size: 10px;
        font-weight: bold;
        cursor:pointer;
        color:black;
    }
`;

export const Itens = styled.div`
    position: fixed;
    display: none;
    height: 100vh;
    width: 400px;
    background-color: white;
    z-index: 9999999999;
    left: 1520px;
    top: 60px;
    animation: mov 0.1s linear;
    
    .X{
        position: fixed;
        border: 1px solid white;
        border-radius: 15px;
        top: 65px;
        left: 1525px;
        height: 20px;
        width: 24px;
        background-color: white;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
    }

    button:hover{
        opacity: .85;
    }

    @keyframes mov {
        from {
            transform: translate(300px);
        } to {
            transform: tranlate(0px);
        }
    }
`;

export const Text = styled.h1`
    color:white;
    text-align:center;
    background-color:black;
    padding:0;
    margin:0;
    height: 60px;
    padding-top: 20px;

    
`;

export const FinishBuy = styled.div`

    border-top: 1px solid black;
    display: flex;
    margin-top:690px;
    position:absolute;
    top: 130px;
    width:450px;
    height:20px;
    background-color:white;

    button{
        border: 1px solid white;
        border-radius: 10px;
        margin-top:5px;
        background-color: black;
        color:white;
        display: block;
        height: 80px;
        width: 200px;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
    }
    
    .btnEnd:hover{
        background-color: rgba(255,179,179,.9);

    }


`;