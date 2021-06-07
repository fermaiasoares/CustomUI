import React, { useCallback, useRef } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StatusBar, TextInput } from 'react-native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { LoginContainer, ImageBackground, Container } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Select from '../../components/Select';

import BackgroundImage from '../../assets/images/background.png';
import LogoVersa from '../../assets/images/versatec.svg';
import LogoVersaSus from '../../assets/images/logo.svg';

interface LoginData {
    instancia: string;
    email: string;
    senha: string;
}

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const senhaInputRef = useRef<TextInput>(null);

    const Instancias = [
        { id: 1, value: 'versasus', label: 'Ambiente de Teste' },
        { id: 2, value: 'caratinga', label: 'Caratinga - MG' },
        { id: 4, value: 'carloschagas', label: 'Carlos Chagas - MG'},
        { id: 5, value: 'lajinha', label: 'Lajinha - MG'},
        { id: 3, value: 'sbleste', label: 'Santa Bárbara do Leste - MG'}
    ]

    const handleLogin = useCallback(async (data: LoginData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                instancia: Yup.string()
                    .required('Instância é obrigatório'),
                email: Yup.string()
                    .required('E-mail é obrigatório')
                    .email('Digite um email válido'),
                senha: Yup.string()
                    .required('Senha é obrigatório'),
            })

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            if(err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
            }

            Alert.alert(
                'Erro na autenticação',
                'Ocorreu um erro ao fazer login, verifique suas credenciais'
            )
        }
    }, [])

    return (
        <>
            <StatusBar
                barStyle='dark-content'

                backgroundColor='transparent'
                translucent />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ImageBackground source={BackgroundImage}>
                    <Container>
                        <LogoVersaSus />
                    </Container>
                    <Form ref={formRef} onSubmit={handleLogin}>
                        <LoginContainer>
                            <Select
                                icon="server"
                                name="instancia"
                                placeholder="Selecione Instância"
                                items={Instancias}
                            />
                            <Input
                                ref={emailInputRef}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                autoCompleteType='email'
                                autoCorrect={false}
                                name="email"
                                icon="mail"
                                placeholder="E-mail"
                                returnKeyType="next"
                                onSubmitEditing={() => senhaInputRef.current?.focus()}
                            />

                            <Input
                                ref={senhaInputRef}
                                type='password'
                                autoCapitalize='none'
                                autoCompleteType='off'
                                autoCorrect={false}
                                name="senha"
                                icon="lock"
                                placeholder="Senha"
                                returnKeyType="send"
                                returnKeyLabel="Entrar"
                                onSubmitEditing={() => formRef.current?.submitForm()}
                            />

                            <Button
                                icon="log-in"
                                tipo="primary"
                                title="Entrar"
                                onPress={() => formRef.current?.submitForm()}
                            />
                            <Row>
                                <Col center>
                                    <LogoVersa style={{ margin: 20 }} />
                                </Col>
                            </Row>
                        </LoginContainer>
                    </Form>
                </ImageBackground>
            </KeyboardAvoidingView>
        </>
    );
}

export default Login;
