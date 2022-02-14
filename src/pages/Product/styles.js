import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh; 
    background-color: #e6e6e6;
    max-width: 100vw;

    .semTam{
        font-size:16px;
        padding:5 15px;
        background-color:grey;
    }
`;

export const Header = styled.div`
    position: absolute;
    width: 100%;
    border-bottom: 3px solid #ffb3b3;
    display: flex;
    color: #ffb3b3;
    align-items: center;
    justify-content: space-around;
    background-color: #e6e6e6;
    z-index: 9999999999999;
`;

export const LineTemp = styled.div`
    position:absolute;
    background-color:transparent;
    top:60px;
    left:450px;
    width:65px;

    .btnback{
        border: none;
        background-color:transparent;
        font-weight:bold;
        color:black;
        cursor:pointer;
        font-size:12px;  
    }
`;

export const Text = styled.h1`
    margin: 10px;
    font-size:28px;
    cursor: inherit;
    padding-left: 15px;

    p{
        margin: 0px;
        padding-right: 70px;
        border-right: 2px solid #ffb3b3;
    }
`;

export const Value = styled.h1`
    padding:0px;
    margin:0px;
`;

export const Item = styled.div`
    position:relative;
    top: -200px;
    display:block;
    background-color: rgba(255, 255, 255, 0.7);;
    height: 100%;
    width: 30%;
    left: 1000px;
    text-align: center;
    border: 1px solid #808080;
    padding: 20px 0px;
    border-radius:5px;

    p{
        font-size:14px;
        opacity: .7;
        margin-top:20px;
    }

    button{
        font-size:24px;
        background-color:#ffb3b3 ;
        border:none;
        font-weight:bold;
        cursor:pointer;
        margin-top: 0px;
        padding: 10px 100px;
    }

    button:hover{
        opacity: .85;
    }
`;

export const TamanhoList = styled.div`
    display:flex;
    margin-left: 190px;
`;

export const ItemImage = styled.div`
    position:relative;
    top:200px;
    left: 450px;
    height:401px;
    width:401px;

    img {
        height:401px;
        width:401px;
        border-radius:15px;
    }

    img:hover{

        border: 3px solid #ffb3b3;
        border-radius: 10px;
    }
`;

export const Title = styled.div`
    color:black;
    font-size: 28px;
    text-align: center;
    z-index: 999;
`;

export const Description = styled.div`
    color:black;
    font-size: 12px;
    text-align: start;
    z-index: 999;
    border-top: 1px solid black;
    
`;

export const ItemDescription = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding:10px 5px;
    width:20%;
    height:200px;
    position:absolute;
    left:450px;
    top: 650px;
    border: 1px solid #808080;
    border-radius: 5px;
`;

export const Frete = styled.div`
    margin-top:25px;
    input{
        font-size: 15px;
        font-weight: 400;
        height: 44px;
        line-height: 100%;
        border: 1px solid #000;
        vertical-align: top;
        width: 118px;
        border-right: none;
        border-radius: 0px;
    }

    .verify{
        background-color:black;
        color:white;
        border: 1px solid #000;
        height:48px;
        cursor:pointer;
    }

    a{
        display:block;
        text-decoration: 1px underline black;
        color: black;
        opacity: .7;
        font-weight:bold;
        font-size:12px;
    }


`;

export const FreteItem = styled.div`
        
        align-items:center;
        justify-content: center;
        padding-left:95px;
        margin-top:40px;
        padding-bottom:40px;
        
        .FreteItem{
            color:white;
            border: 1px solid white;
            background-color: black;
            width: 376px;
            height: 100px;
            text-align:center;
        }
`;



