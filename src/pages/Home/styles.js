import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh; 
    background-color: #e6e6e6;
    
    
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
        cursor: inherit;
        border:none;
        font-size:44px;
        font-weight:normal;
        margin-top:50px;
        margin-left: 30px;
        margin-bottom:50px;
    }

    

`;

export const Swiper = styled.div`
    padding-top: 55px;

    

    img {
        width: 100%;
        height: 650px;
    }

    .swiper-button-prev, .swiper-button-next {
        color:#ffb3b3;
        width:200px;

    }

    .swiper-button-prev:after, .swiper-button-next:after{
        font-size: 16px;
        border: 2px solid #ffb3b3;
        border-radius: 15px;
        padding: 5px 9px;
        background-color: rgba(128, 128, 128, 1);
        
    }

    .swiper-button-prev:hover, .swiper-button-next:hover{
        opacity: 0.7;
    }

    .swiper-pagination-bullet-active{
        background: white;
    }

`;

export const ProductsList = styled.div`
        width: 100%;


        .swiper-button-prev,.swiper-button-next {
            color:#ffb3b3;
            width:0px; 
            margin:0px 10px;
        }

        .swiper-button-prev:after, .swiper-button-next:after{
            font-size: 22px;
            border: 1px solid #ffb3b3;
            border-radius:15px;
            padding: 6px 9px;
            background-color: white;
        }
        
       
`;

export const ScreenWaning = styled.div`
    text-align:center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }

`;