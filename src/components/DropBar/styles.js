import styled from "styled-components";


export const Container = styled.div`
    border: 0px solid black;
    margin-right: 1000px;
    cursor: pointer;
    font-weight: bold;
    
    .dropdown {
        color: #ffb3b3;
        padding: 15px;
    }
    
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 80px;
        margin-top:17px;
        z-index: 999999;
        left: 340px;
    }

    .dropdown-content ul {
        padding: 0px;
        margin:0px;
    }

    .dropdown-content ul li {
        border-bottom: 2px solid #b3b3b3;
        border-radius: 1px;
        color: #ffb3b3;
        opacity: 0.9;
        text-decoration: none;
        font-size: 12px;

        display: block;
        padding: 5px;
        text-align: center;
      }
    
    .dropdown-content ul li:hover {
        background-color: rgba(127,127,127,.2);
        opacity: 1;
    }
    .dropdown:hover .dropdown-content {
        display: block;
        border-top: 2px solid #666666;
    }


`;