import React from 'react';
import styled from 'styled-components';
import { Board } from './board';

const StyledGaneContainer = styled.div`
    display: flex;
`;

export const Game: React.FC = () => {
    return (
        <StyledGaneContainer>
            <Board />
        </StyledGaneContainer>
    )
}