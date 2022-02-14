import styled from "styled-components";


export const Container = styled.div`
    min-height: 100%; 
    background-color: white;
    display:flex;
    justify-content:center;
`;

export const Header = styled.div`
    position: absolute;
    width: 100%;
    border-bottom: 3px solid #ffb3b3;
    display: flex;
    color: #ffb3b3;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    z-index: 9999999999999;
    height:60px;
`;


export const Register = styled.div`
    margin-top:100px;
    width:75%;
    height:93vh;
    background-color:white;
    
    .input{
        display:flex;
        flex-direction:row;
      
    }

    .input1{
        border-right:2px solid black;
        display:block;

    }

    .input2{
        border-right:2px solid black;
        display:block;
    }
    
`;

export const RegHeader =styled.div`
    color:black;
    margin:0px;
    padding:0px;
    
    .backhome{
        font-size:14px;
        border:none;
        margin:0px;
    }

`;

export const Input = styled.div`
    width:50%;
    height:100%;

    .closetext{
        font-size:14px;
    }
    
`;

export const Text = styled.h1`
    margin: 10px;
    font-size:28px;
    cursor: inherit;
    padding-left: 15px;

    p{
        cursor:pointer;
        margin: 10px;
        padding-right: 70px;
        border-right: 2px solid #ffb3b3;
    }

    .titleText{
        border:none;
        font-size:44px;
        margin-top:50px;
        margin-left: 180px;
    }

    .end2{
        font-size:14px;
        cursor:default;
        border:none;
        color:black;
    }
`;

export const RegFooter = styled.div`
    margin-top:100px;
    display:flex;
    justify-content:space-between;

    input{
        margin-left:30px;
    }

    label{
        color:black;
    }

    button{
        margin-right:30px;
        height:35px;
        width:100px;
        color:white;
        background-color:black;
        border:none;
        font-size:16px;
        cursor:pointer;
    }
`;

export const Footer = styled.div`
    position:absolute;
    top:945px;
    left:0px;
    font-size:10px;
    width:100%;
    background:transparent;
    height: 60px;
    p{
        margin-left:150px;
    }

    hr{
        height:2px;
        background-color:black;
    }
`;