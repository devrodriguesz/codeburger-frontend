import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow {
        background-color: #9758a6;
        color: #EFEFEF;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, .25));
    }

    .rec.rec-arrow:hover {
        border: 2px solid #9758a6;
        background-color: #EFEFEF;
        color: #9758a6;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #BEBEBF;
        color: #FFF;

    }
`;

export const CategoryImg = styled.img``;

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 120%;
        color: #424242;   
    }
`;

export const Image = styled.img`
    width: 200px; 
    height: 200px;
    border-radius: 15px;
    margin-bottom: 16px;
`;

export const Button = styled.button`
    box-sizing: border-box;
    background-color: #9758a6;
    border-radius: 8px;
    height: 45px;
    border: none;
    margin-top: 16px;
    
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color: #FFF;
    cursor: pointer;

    &:hover{
        opacity: 0.75;
    }
    &:active{
        opacity: 0.6;
    }
`;