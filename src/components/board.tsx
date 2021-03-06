import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Square } from './square';

const StyledBoardContainer = styled.div``;

const StyledStatus = styled.div`
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    color: #50E3C2;
`;

const StyledRow = styled.div`
    display: flex;
`;

const ROWS = [0, 1, 2];
const COLS = [0, 1, 2];

export type Square = 'X' | 'O' | null;

export const Board: React.FC = () => {
    const [squares, setSquares] = useState<Square[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [status, setStatus] = useState<string>(`Next player: ${xIsNext ? 'X' : 'O'}`);

    const calculateWinner = useCallback((squares: Square[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        const emptySquares = squares.filter(square => square === null);

        // Game in draw
        if (emptySquares.length === 0) return false;

        // Continue game
        return null;
    }, [squares]);

    const handleClick = useCallback((id: number) => {
        const newSquares = [...squares];

        if (calculateWinner(newSquares) || newSquares[id]) return;

        newSquares[id] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }, [squares, xIsNext]);

    useEffect(() => {
        setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
    }, [xIsNext]);

    useEffect(() => {
        const winner = calculateWinner(squares);
        let nextStatus;

        if (winner) {
            nextStatus = 'Выиграл ' + winner;
        }
        else if (winner === false) {
            nextStatus = 'Ничья';
        }
        else {
            nextStatus = 'Следующий ход: ' + (xIsNext ? 'X' : 'O');
        }

        setStatus(nextStatus);
    }, [squares]);

    return (
        <StyledBoardContainer>
            <StyledStatus>{status}</StyledStatus>

            {ROWS.map(rowId => (
                <StyledRow>
                    {COLS.map(colId => {
                        const id = rowId * COLS.length + colId;
                        return (
                            <Square
                                value={squares[id]}
                                onClick={() => handleClick(id)}
                            />
                        )
                    })}
                </StyledRow>
            ))}
        </StyledBoardContainer>
    )
}