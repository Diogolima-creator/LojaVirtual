import styled from "styled-components";

export const Container = styled.div`
    margin-top:20px;
    display:flex;
    height:170px;
    width:320px;
    border:1px solid black;
    margin-left:50px;
    padding:10px;
    
    .Titulo{
        font-weight:bold;
        margin-bottom:10px;
        font-size:18px;
    }

    p{
        font-weight:italic;
        margin:0px;
        padding:0px;
        margin-left:5px;
        margin-right:50px;
        font-size:16px;
        margin-top:5px;
    }

    .Delete{
        margin:0px;
        height:20px;
        width:25px;
        font-size:12px;
        font-weight:bold;
        
    }

    .Alterar{
        width:80px;
        height:30px;
        float:left;
        margin-left:5px;
        margin-top:10px;
    }
`;