import styled from "styled-components";
import images1 from '../../images/footer6.jpg';

export const Container = styled.div`

        .Newsletter {
                width:100%;
                height:370px;
                background-image: url(${images1}) ;
                background-size: 100% 600px;
                background-position: center;
                background-repeat: no-repeat;
                opacity: 1;
                margin-top:200px;
        }

        img{
            position:relative;
            color: white;
            height:50px;
            left:800px;
            top:65px;
        }

`;

export const Form = styled.div`
        opacity: 1;
        margin-left: 800px;
        display: block;
        height: 20px;
        width: 0px;
        padding-top:5px;
        

        input {
            background-color:white;
            font-size: 14px;
            outline: none;
            margin-bottom: 8px;
            width:700px;
            border-radius:5px;
            border:none;
            height:30px;
            paddig-left:10px;
            color:black;
            padding: 6px 12px;
            cursor:text;
            font-family: 'Maven Pro', sans-serif;
        }

        .sumbit {
            color:black;
            width: 100px;
            margin-left:610px;
            border-radius:10px;
            border:none;
            height:40px;
            padding:10px;
            cursor:pointer;
            font-weight:bold;
        }

        .sumbit:hover {
            opacity: .9;
            background-color:black;
            color:white;
        }


`;

export const Text = styled.h1`
        opacity: 1;
        color: white;
        padding: 0px 570px;
        font-size:18px;
        margin-left: 290px;

`;

export const Footer = styled.div`
        display:block;
        height:605px;
        background-color: #e6e6e6;

        .payout li {
            cursor:default;
        }

        .payout img{
            position:inherit;
            width:40px;
            height:40px;
            cursor:default;
        }

        .payout img:hover{
            height:40px;
            width:40px;
        }

        ul li img{
            position:inherit;
            height:20px;
            width:20px;
        }

        img:hover{
            height:25px;
            width:25px;
        }

        .redesociais{
            display: flex;
            padding:0;
            margin:0;
        }

        a{
            margin-right:5px;    
        }

        .NCSM{
            margin:0px;
            padding:0px;
            text-align:center;
            padding-top:5px;
            font-size:48px;
            color:#ffb3b3;
            
        }

        .Edr{
            margin:0;
            padding:0;
            height:20px;
            color:black;
            font-weight:normal;
            font-size:14px;
            text-align:center;
            margin-top:60px;
            opacity: .6;
        }

        .Edr1{
            opacity: 1;
            padding:0;
            margin:0;
            height:20px;
            color:black;
            font-weight:normal;
            font-size:14px;
            text-align:center;
            margin-top:15px;
        }
       
        ul {
            
            font-size:16px;
            margin-top:5px;
            color:#ffb3b3;
            font-weight:bold;
        }

        ul li {
            margin-top:5px;
            text-decoration: none;
            color:black;
            font-weight:normal;
            padding: 5px 0px;
            font-size:12px;
            list-style-type: none; 
        }

        ul li:hover{
            cursor:pointer;
            text-decoration: underline;
        }
        
        .horario:hover {
            cursor:default;
            text-decoration: none;
            
        }

        .Listas{
            margin-top:45px;
            justify-content:center;
            display:flex;
            margin-left:10px;
        }
`;

export const List = styled.div`
        width:250px;
        padding:25px;
        margin-left:30px;
        margin-right:30px;
        font-size:16px;
        color:#ffb3b3;
        font-weight:bold;
       
`;