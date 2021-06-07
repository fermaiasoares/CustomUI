import styled, { css } from 'styled-components/native';

interface TextoProps {
    horizontal: boolean;
}

export const Container = styled.View<TextoProps>`
    ${props => props.horizontal && css`
        flex-direction: row;
        align-items: center;
    `}
`;

export const Label = styled.Text`
    margin-right: 4px;
`;

export const Texto = styled.Text`
    width: 100%;
`;
