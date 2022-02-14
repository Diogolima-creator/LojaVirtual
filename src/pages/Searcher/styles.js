import styled from "styled-components";
import images1 from '../../images/banner.jpg';

export const Container = styled.div`
    min-height: 100vh; 
    background-image: {${images1}};
    display:flex;

`;

export const Header = styled.div`
    position: fixed;
    width: 100%;
    border-bottom: 3px solid #ffb3b3;
    display: flex;
    color: #ffb3b3;
    align-items: center;
    justify-content: space-around;
    background-color: #e6e6e6;
    z-index: 9999999999999;
    padding-bottom:4px;
`;

export const Text = styled.h1`
    margin: 0px;
    font-size:28px;
    cursor: inherit;
    padding-left: 15px;

    p{
        margin: 0px;
        padding-right: 70px;
        border-right: 2px solid #ffb3b3;
        cursor:pointer;
    }

    .titleText{
        border:none;
        font-size:20px;
        margin-top:0px;
        margin-left: 0px;
        margin-bottom:50px;
    }

    

`;
export const Banner = styled.div`
        position:absolute;
        height:44%;
        width:100%;
        background-image: url(${images1});
        background-size: 100% 500px;
        background-position: 2% 20%;
        background-repeat: no-repeat;
`

export const Search = styled.div`

    padding-top:450px;
    background-color:white;
    padding-bottom:300px;
    padding-left:0px;
    width:50%;
    margin-left:0%;

    .ContainerProducts {
        
        height:400px;
        width:208px;

    }

    img{
        width: 150px;
        height: 150px;
        padding-left:30px;
    }

    
`;

export const SearchFunc = styled.div`
        margin-top:450px;
        margin-left:225px;
        width:250px;
        height:100vh;
        background-color:transparent;
        color:black;
        
        text-align:center;

        .titleFilter{
            margin-top:15px;
            font-size:18px;
            text-align:start;
        }
        
`;

export const PriceBar = styled.div`

        width:200px;
        height:100px;
        margin-left:20px;
        margin-top:5px;
        background-color:white;

        .minmax{
            margin-left:15px;
            margin-right:15px;
            margin-top:-10px;
            display:flex;
            height:30px;
            justify-content: space-between;
            background-color:transparent;   
            color:black;
            font-size:12px;
            font-weight:normal;
        }
        
        input {
            position: absolute;
            left:246px;
            width:205px;
            top:561px;
            opacity: 0;
            z-index:999;
        }

        input[type=range] {
            position: absolute;
            pointer-events: none;
            -webkit-appearance: none;
            z-index: 999;
            height: 10px;
        
        }

        input[type=range]::-webkit-slider-thumb {
            pointer-events: all;
            width: 30px;
            height: 30px;
            border-radius: 0;
            border: 0 none;
            background-color: red;
            -webkit-appearance: none;
        }

        .valorfilter{
            display:flex;
            margin-bottom:40px;
        }
        
        .inputss{
            width:100%;
            height:100%;
        }

        .block{
            display:flex;
            background-color:transparent;  
            justify-content: space-between;
            margin-top:50px;
            margin-left:15px;
            margin-right:15px;
            margin-bottom:5px;
            p{ 
                font-size:14px;
                font-weight:normal;
                border:1px solid black;
                padding:0;
                margin:0;
                
                color:black;
            }
        }

        .slider{
            position: relative;
            top: -57px;
            left: 20px;
            width: 80%;
            height:10px;
            
        }

        .slider > .track {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: 5px;
            background-color:  #998a8a;
        }

        .slider > .range {
            position: absolute;
            z-index: 2;
            left: 0%;
            right: 0%;
            top: 0;
            bottom: 0;
            border-radius: 5px;
            background-color: #ffb3b3;
        }

        .slider > .thumb {
            position: absolute;
            z-index: 3;
            top:5px;
            width: 20px;
            height: 20px;
            background-color: #ffb3b3;
            border-radius: 50%;
            box-shadow: 0 0 0 0 rgba(98,0,238,.1);
            transition: box-shadow .3s ease-in-out;
        }

        .slider > .thumb.left {
            left: 0%;
            transform: translate(-15px, -10px);
        }
        
        .slider > .thumb.right {
            right: 0%;
            transform: translate(15px, -10px);
        }

        .slider > .thumb.hover {
            box-shadow: 0 0 0 20px rgba(98,0,238,.1);
        }
        
        .slider > .thumb.active {
            box-shadow: 0 0 0 40px rgba(98,0,238,.2);
        }
         
        
`;

export const Tamanho = styled.div`

        width:150px;
        height:150px;
        margin-left:20px;
        display:block;
        margin-top:5px;
        background-color:white;
        button {
            background: transparent;
            border:1px solid black;
            margin-top:20px;
            height:35px;
            width:35px;
            margin-left:5px;
            cursor:pointer;
        }

        button:hover{
            border:3px solid black;
        }
`;

export const Cor = styled.div`
        width:150px;
        height:70px;
        margin-left:20px;
        display:block;
        margin-top:5px;
        background-color:white;
        button {
            background: transparent;
            border:1px solid black;
            margin-top:20px;
            height:25px;
            width:30px;
            margin-left:5px;
            cursor:pointer;
        }

        button:hover{
            border:3px solid black;
        }

        .blue{
            background-color:blue;
        }

        .red{
            background-color:red;
        }

        .black{
            background-color:black;
        }
`;
export const ProductsList = styled.div`
        padding: 0px;
        margin: 0px;
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
        border-right:1px solid black;
        border-left:1px solid black;
        margin-right: 0px;
        width:1200px;
`;

export const ScreenWaning = styled.div`
    text-align:center;
    img{
        height:50px;
        width:50px;
    }
`;

export const LineTemp = styled.div`
    background-color:transparent;
    width:350px;

    .btnback{
        border: none;
        background-color:transparent;
        font-weight:bold;
        color:black;
        cursor:pointer;
        font-size:11px;  
    }

    p {
        padding-left:15px;
        font-size:10px;
        font-weight:normal;
        opacity: .7;
    }
`;

