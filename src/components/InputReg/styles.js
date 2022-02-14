import styled from "styled-components";

export const Container = styled.div`
    margin-left:30px;

    color:white;

    p{
        margin:0px;
        padding:0px;
        font-family: 'Maven Pro', sans-serif;
        color:black;
    }

    .inputflex{
        display:flex;
        margin-top:10px;
    }
    
    .inputmetadeblock{
        display:block;
        input{
            width:90%;
        }
        
    }

    .inputmetadeflex{
        display:block;
        width:50%;
        margin-right:30px;
        margin-top:10px;
    }

    .inputflexmetade{
        margin-top:10px;
        display:flex;
        width:100%;
    }
    
    input{
        background-color:white;
        font-size: 14px;
        outline: none;
        margin-bottom: 8px;
        width:623px;
        border-radius:0px;
        border:1px solid black;
        height:30px;
        paddig-left:10px;
        color:black;
        padding: 0px 12px;
        cursor:text;
        font-family: 'Maven Pro', sans-serif;
    }
`;