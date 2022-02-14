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


export const Profile = styled.div`
    margin-top:100px;
    width:75%;
    height:83vh;
    background-color:white;

    .ProfileFlex{
        display:Flex;
        margin-left:30px;
    }
    
    
`;

export const AddressInput = styled.div`
    
    height:450px;
    width:400px;
    background-color:black;
    display:none;
    position:absolute;
    z-index: 99999999999;
    left:750px;
    top:250px;
    animation: modal .4s;
    
    .teste{
        position:Absolute;
        hidden:1;
        z-index:131321;
    }
    .screenback{
        position:relative;
        background: rgba(0,0,0,.5); 
        height:1223px;
        width:2170px;
        z-index:1;
        top:-500px;
        left:-1000px;
    }
    p{
        color:white;
    }
        #ref{
            width:139.5px;
        }
        .btnCloseAdd{
            background-color:black;
            width:20px;
        }
        .btnAddEnd{
            font-weight:bold;
            font-size:15px;
            width:165px;
            position:absolute;
            top:360px;
            left: 215px;
            color:black;
            background-color:White;
        }

    @keyframes modal{
        from {
                opacity: 0;
                transform: translate3d(0,-60px,0);
        } to {
                opacity: 1;
                transform: tranlate3d(0,0,0);
            }
        }

`;
export const ProfileHeader =styled.div`
    color:black;
    margin:0px;
    padding:0px;
    
    .backhome{
        font-size:14px;
        border:none;
        margin:0px;
    }

`;

export const ProfileMenu = styled.div`
    margin-left:150px;
    margin-top:40px;
    width:20%;
    font-weight:bold;
    background-color: grey;
    display:block;
    margin-bottom:230px;
    
    .Logout{
        cursor:pointer;
    }
    .perfilTitle{
        color:white;
        
    }

    .perfilList ul li{
        padding-left:4px;
    }

    ul{
        margin:0px;
        padding:0px;
    }

    ul li{
        padding:7px 0px;
        border-top:2px solid white;
        cursor:pointer;
        width:100%;
        list-style:none;

    }

    img{
        position:absolute;
        height:32px;
        width:32px;
        border:2px solid white;
        border-radius:5px;
        top:248px;
        left:430px;
        background-color:white;
    }

    p{
        margin-left:50px;
    }

`;


export const ProfileSelect = styled.div`
    
    width:50%;
    height:450px;
    margin-top:20px;

    .Input{ 
        margin-left:20px;
    }

    .IconSvg{
        width:16px;
        height:16px;
        margin-top:15px;
        margin-left:50px;
        margin-right:3px;
    }

    .IconSvgBox{
        width:18px;
        height:18px;
        margin-top:18px;
        margin-left:50px;
        margin-right:3px;
    }

    .meusDados{
        margin-left:5px;
    }
    
    .titleDados{
        display:flex;
        align-items: center;
            img{
                position:absolute;
                top:242px;
                left:740px;
                height:16px;
                width:16px;
            }
        
            hr{
                margin-top:30px;
                flex:1;
                border-color: black;
                margin-left: .5em;
                margin-right: 2em;
            }
            p{
                font-weight:bold;
                font-size:18px;
                margin-left:0px;
                margin-bottom:0px;
            }
    }

    .titleDados p{
        font-weight:bold;
        font-size:18px;
        margin-left:0px;
        margin-bottom:0px;
    }

    button{
        margin-top:20px;
        margin-right:32px;
        float:right;
        height:35px;
        width:150px;
        color:white;
        background-color:black;
        border:none;
        font-size:16px;
        cursor:pointer;
    }
    
    .meusEndereços{
        width:1000px;
    }

    .btnEnd{
        margin-top:50px;
        float:right;
        width:200px;
    }

    .listaddress{
        display:flex;
        flex-wrap:wrap;
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

export const Footer = styled.div`
    position:absolute;
    top:900px;
    left:0px;
    font-size:10px;
    width:100%;
    background:transparent;
    height: 50px;
    p{
        margin-left:150px;
    }

    hr{
        height:2px;
        background-color:black;
    }
`;
