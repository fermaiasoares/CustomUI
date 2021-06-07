import React from 'react';
import { TextProps } from 'react-native';

import { Container, Label, Texto } from './styles';

interface TextoProps extends TextProps {
    label: string;
    texto: string;
    horizontal: boolean;
}

const Text: React.FC<TextoProps> = ({ label, texto, horizontal, ...rest }) => {
    return (
        <Container horizontal={horizontal}>
            <Label>{label}</Label>
            <Texto {...rest}>{texto}</Texto>
        </Container>
    );
}

export default Text;
