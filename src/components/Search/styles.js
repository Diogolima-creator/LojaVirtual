import styled from "styled-components";

export const Container = styled.div`

    .searchInput{
    width: 20px;
    height: 50px;
    display: flex;
    margin-left: 0px;
    cursor: pointer;
    }
    
    .searchBlock{
        background-color: #a6a6a6;
        width: 510px;
        height: 30px;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        padding: 10px;
        padding-right: 30px;
        padding-left: 15px;
        animation: mov .1s linear;
    }

    @keyframes mov {
        from {
            transform: translate(-30px);
        } to {
            transform: tranlate(0px);
        }
    }

    .searchBlock:hover {
        opacity: .95;
    }

    .searchInput:hover {
        border: 1px solid blue;
    }

    .searchInput:hover .search{
        display:block;
    }

    .search {
        display: none;
        position: absolute;
        background-color: transparent;
        padding: 0;
        margin-top: 50px;
        z-index: 1;
        left: 955px;
        top: -45px;
        transition: display .3s;
    }

    .search input {
        width: 500px;
        font-size: 12px;
        float: right;
        padding: 6px;
        margin-top: 0px;
        border: 2px solid #cccccc;
        outline: transparent;
    }


    .lupa-search{
        position: absolute;
        background-color: #a6a6a6 ;
        width: 25px;
        height: 23px;
        color: white;
        top: 12px;
        right: 2px;
        border: 1px solid #a6a6a6;
        
    }

    
    .lupa-search:hover {
        opacity: .80;
        
    }


`; 