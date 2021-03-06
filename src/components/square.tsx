import React from 'react';
import styled from 'styled-components';
import { Square as SquareValue } from './board';

const Button = styled.button`
    background: #fff;
    border: 1px solid #000;
    font-size: 42px;
    font-weight: bold;
    line-height: 64px;
    width: 64px;
    height: 64px;
    padding: 0;
    text-align: center;
    outline: none;
    margin-right: -1px;
    margin-top: -1px;
    color: #000;
`;

type SquareProps = {
    value: SquareValue;
    onClick: () => void;
}

export const Square = React.memo<SquareProps>(({ value, onClick }) => {
    return (
        <Button onClick={onClick}>{value}</Button>
    )
})