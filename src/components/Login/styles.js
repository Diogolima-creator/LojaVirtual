import styled from "styled-components";

export const Container = styled.div`
    margin-left: 50px;
    margin-right: -50px;

    button {
        background-color: #ffb3b3; 
        border: none;
        border-radius:5px;
        color: white;
        padding: 5px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    button:hover {
        opacity: .70;
        cursor: pointer;
    }
`;

export const Form = styled.div`

    .form-login {
        display: block;
        height: 20px;
        width: 0px;
    }

    .modal-container{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,.5); 
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 2000;
        display: none;
        justify-content: center;
        align-items: center;
        
    }

    .btnclose{
        margin: 0;
        padding: 0px;
        height: 35px;
        width: 35px;
        border-radius: 30px;
        float: right;
        box-shadow: 0px 0px 0px 2px grey;
    }

    .cadastro{
        display: block;
        float: right;
        
    }

    .modal{
        background: white;
        width: 25%;
        min-width:300px;
        height: 20%;
        padding: 10px;
        border: 10px solid grey;
        position: absolute;
        
        
            p {
            margin: 0px;
            margin-bottom: 9px;
            padding: 0;
            font-weight: bold;
        }
    }
    
    .modal input{
        
        margin: 5px;
        margin-bottom: 10px;
        display:block;
        font-size: 16px;
        outline: none;
    }

    @keyframes modal {
        from {
            opacity: 0;
            transform: translate3d(0,-60px,0);
        } to {
            opacity: 1;
            transform: tranlate3d(0,0,0);
        }
    }
    
    .modal-container.mostrar {
        display: flex;
    }

    .mostrar .modal{
        animation: modal .4s;
    }   

        
`;