import styled, { css } from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
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

export const SelectInput = styled(Picker)`
    flex: 1;
`;

export const Icon = styled(Feather)`
    margin-right: 8px;
`;

export const TextError = styled.Text`
    font-size: 10px;
    color: #C53030;
    margin-top: -16px;
    margin-bottom: 8px;
`;
