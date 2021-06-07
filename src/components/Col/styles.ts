import styled, { css } from 'styled-components/native';

interface ContainerProps {
    width?: number;
    height?: number;
    flexMode?: boolean;
    center?: boolean;
}

export const Container = styled.View<ContainerProps>`
    ${props => props.center && css`
        align-items: center;
        justify-content: center;
    `}

    ${props => props.flexMode && css`
        flex: 1;
    `}

    ${props => props.width && css`
        width: ${props.width}px;
    `}

    ${props => props.height && css`
        height: ${props.height}px;
    `}
`;
