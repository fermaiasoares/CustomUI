import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface ContainerProps {
    buttonType: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 56px;
    border-radius: 10px;

    ${props => props.buttonType === 'primary' &&
        css`
            background-color: #0B75D7;
        `
    }

    ${props => props.buttonType === 'secondary' &&
        css`
            background-color: #FF8181;
        `
    }

    ${props => props.buttonType === 'success' &&
        css`
            background-color: #7DC579;
        `
    }

    ${props => props.buttonType === 'warning' &&
        css`
            background-color: #FFC960;
        `
    }

    ${props => props.buttonType === 'error' &&
        css`
            background-color: #FF6D9F;
        `
    }
`;

export const Icon = styled(Feather)`
    margin-right: 8px;
`;

export const ButtonText = styled.Text`
    color: #FCFCFF;
`;
