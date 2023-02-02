import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
    background: #3C3C3C;
    box-shadow: 0 0 14px rgba(0,0,0, 0.15);
    width: 300px;
    top: 0;
    left: 0;
    hr {
        margin: 50px 20px;
    }
`;

export const ItemContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    background: ${props => props.isActive ? '#565656' : 'none'};
    border-radius: 5px;
    margin: 8px;
    padding-left: 20px;

    .icon {
        color: #FFF
    }
`;

export const ListLink = styled(Link)`
    text-decoration: none;
    color: #FFF;
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    margin-left: 8px;
`;