import React from 'react';
import styled from 'styled-components';
import { Game } from '../components/game';

const StyledRootContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 160px 220px;
`;

const Root = () => {
    return (
        <StyledRootContainer>
            <Game />
        </StyledRootContainer>
    )
}

export default Root;