import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText, Icon } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    icon?: string;
    name?: string;
    title: string;
    tipo: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const Button: React.FC<ButtonProps> = ({ icon, name, title, tipo, ...rest}) => {
    return (
        <Container buttonType={tipo} {...rest}>
            { icon && <Icon name={icon} size={20} color="#FCFCFF"/> }
            <ButtonText>{title}</ButtonText>
        </Container>
    );
}

export default Button;
