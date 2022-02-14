import styled from "styled-components";


export const Container = styled.div`
    min-height: 100vh; 
    background-color: #e6e6e6;
    display:flex;
    justify-content:center;
`;

export const Header = styled.div`
    position: fixed;
    width: 100%;
    border-bottom: 3px solid #ffb3b3;
    display: flex;
    color: #ffb3b3;
    align-items: center;
    justify-content: space-between;
    background-color: #e6e6e6;
    z-index: 9999999999999;
    height:60px;
`;

export const Text = styled.h1`
    margin: 10px;
    font-size:28px;
    cursor: inherit;
    padding-left: 15px;

    p{
        cursor:pointer;
        margin: 0px;
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

export const CartPage = styled.div(( {qnt} ) => (
    `
    width:1200px;
    height:${(qnt*230)}px;
    margin-top:80px;
    
    .end1{
        
        display:flex;
        justify-content:end;
        font-weight:bold;
        
    }

    .end li{
        list-style-type:none;
        padding-bottom:15px;
    }
   
    button{
        border: 2px solid grey;
        background-color:#ffb3b3; 
        height:45px;
        width:155px;     
        cursor:pointer;
        font-weight:bold;
        font-size:14px;
        color:white;
    }

    button:hover{
        opacity: .99;
        color:#ffb3b3;
        background-color:black;
    }

    .Card{
        display:flex;
        justify-content:center;

    }
    .Card button{
        width:200px;
        color:white;
    }

    .Card p{
        border:none;
        background-color:transparent;
    }
    
`));


export const HeaderCart = styled.div`
    width:1200px;
    height:120px;
    
`;

export const List = styled.div`
    display:flex;
    list-style-type:none;

     ul{
         display:flex;
         list-style-type:none;
         
     }

     ul li {

         padding: 0 10px;
     }

    .FirstList {
        font-weight:bold;
        width:50%;
        justify-content:start;
        
    }

    .FirstList li{
        padding: 0 25px; 
        padding-left:0px;
        padding-right:80px;
    }

    .SecondList{
        width:50%;
        font-weight:bold;
        justify-content:end;

    }
    
    .SecondList li{
        padding: 0 84px;
        
    }

    
`;

export const Product = styled.div`
    display:block;
    
`;
export const Card = styled.div`
    
    display:block;
    color:black;
    padding:5px;
    font-size:18px;
    font-weight: bold;
    padding-left:10px;

    .Lists{
        display:flex;
        height:140px;
    }

    .preco {
        padding-top:35px;
        padding-left:30px;
    }

    .subtotal{
        padding-top:35px;
        margin-right:-20px;
    }

    .ThirdList{
        padding-top:5px;
        list-style-type:none;
        display:flex;
        width:50%;
        padding-left:0px;
        

        img{ 
            margin-right:35px;
            width:82px;
            height:82px;
            border:1px solid grey;
        }
    }
    .nameProd{
        padding-top:30px;
        
    }
    .FourthList{
        padding-right:80px;
    
        list-style-type:none;
        display:flex;
        width:50%;
        justify-content:space-between;
        padding-left:0px;   
    }

    .Buttons{
        display:flex;
        flex-direction:column;
        justify-content:start;
        width:80px;
        margin-left:20px;
        
    }

    &:hover button{
        background-color: black;
        opacity: 1;
    }
    button{
        margin-top:2px;
        margin-buttom:2px;
        border:none;
        cursor:pointer;
        color:white;
        background-color:black;
        border-radius:5px;
        width:80px;
        text-align:center;
    }

    .Xcart{
        margin-right:25px;
        width:80px;
       
    }

    button:hover{
        opacity: .8;
    }

    p{
        border:1px solid black;
        padding:10px 0px;
        margin:0;
        margin-top:2px;
        text-align:center;
        color: black;
        background-color:white;
    }

`;