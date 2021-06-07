import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface ContainerProps {
    hasError?: boolean;
    hasFocus?: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 54px;
    border-color: #c6c6c6;
    background-color: #FFF;
    border-width: 1px;
    border-radius: 10px;
    padding: 0 8px;
    margin-bottom: 16px;

    flex-direction: row;
    align-items: center;

    ${ props => props.hasError &&
        css`
            border-color: #C53030;
        `
    }

    ${ props => props.hasFocus &&
        css`
            border-color: #0B75D7;
        `
    }
`;

export const TextInput = styled.TextInput`
    flex: 1;
    margin: 0 8px;
    color: #000;
`;

export const LabelInput = styled.Text`
    font-weight: 200;
`;

export const Icon = styled(Feather)`
`;

export const TextError = styled.Text`
    font-size: 10px;
    color: #C53030;
    margin-top: -16px;
    margin-bottom: 8px;
`;
