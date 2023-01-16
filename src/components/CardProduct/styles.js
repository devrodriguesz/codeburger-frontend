import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    gap: 12px;
    padding: 16px;
    border-radius: 25px;
    width: min-content;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const Image = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 15px;
`;
export const ProductName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`;
export const ProductPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-top: 35px;
`;
