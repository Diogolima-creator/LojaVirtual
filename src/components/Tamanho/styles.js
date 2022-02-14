import styled from "styled-components";

export const Container = styled.div(({ selected }) => (
    `
        display: block;
        border: 2px solid ${selected ? '#ffb3b3' : '#808080'};
        border-radius: 0px;
        height: 25px;
        margin-bottom: 15px;
        align-items: center;
        margin-left: 5px;
        cursor: pointer;
        width: 40px;
        
        &:hover{
            border: 2px solid #496459;
        }
    `));

export const Title = styled.div`
    font-size: 17px;
    font-weight:bold;
    margin-bottom: 7px
`;