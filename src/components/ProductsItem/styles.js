import styled from 'styled-components';


export const Container = styled.div`
    background-color: transparent;
    
    padding:5px;
    text-align: left;
    height: 500px;
    width: 290px;
    padding-bottom:10px;
    margin-left:38px;
    border: 3px solid transparent;
    
    &:hover{
        border: 3px solid #ffb3b3;
    }

    img{
        width: 290px;
        height: 300px;
        display:block;
        margin-bottom: 10px;
        border-radius: 10px;
        padding-top: 10px;
    }

    &:hover button{
        display:block;
    }
    
`;

export const Card = styled.div`
    text-align: center;
    p {
        font-size:14px;
    }

    .descrição{
        margin:0;
        font-size:18px;
        padding:0;
    }

    h3{
        padding:0;
        margin:0;
        font-size:12px;
    }

    button{
        display: none;
        margin-top: 20px;
        background-color: #ffb3b3;
        border: none;
        padding: 10px;
        width:100%;
        cursor:pointer;
    }

`;


