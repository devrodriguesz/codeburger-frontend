import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    padding: 10px;
    width: 80%;
    margin-top: 20px;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    border-bottom: 1px solid #B5B5B5;

    p {
        font-size: 16px;
        color: #B5B5B5;    
        padding-left: 15px;
    }
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    grid-gap: 10px 15px;
    padding: 10px;

    p {
        font-size: 16px;
        color: #000;
    }

    .quantity-container {
        display: flex;
        gap: 20px;
        button {
            height: 27px;
            width: 25px;
            background: #9758a6;
            border: none;
            font-size: 22px;
            cursor: pointer;
            color: #FFF;
            border-radius: 50px;

            &:active {
                opacity: 0.7;
            }
        }
        p {
            margin-top: 5px;
        }

    }
`;

export const Image = styled.img`
    border-radius: 15px;
    width: 140px;
    height: 140px;
`;

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`;
