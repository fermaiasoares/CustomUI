import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, Icon, TextInput, TextError, LabelInput } from './styles';

interface InputProps extends TextInputProps {
    name: string;
    label?: string;
    icon?: string;
    type?: 'password' | 'text';
}

interface InputValueReference {
    value: string;
}

interface InputRef {
    focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { name, icon, type = undefined, label, ...rest },
    ref
) => {
    const inputElementRef = useRef<any>(null);
    const inputValueRef = useRef<InputValueReference>({ value: '' });
    const { fieldName, registerField, defaultValue = '', error } = useField(name);

    const [hasFocus, setHasFocus] = useState(false);
    const [hasContent, setHasContent] = useState(false);
    const [showText, setShowTest] = useState(false);
    const [showTextIcon, setShowTextIcon] = useState<'eye'|'eye-off'>('eye-off');

    const inputHasFocus = useCallback(() => {
        setHasFocus(true);
    }, [])

    const inputHasBlur = useCallback(() => {
        setHasFocus(false);

        setHasContent(!!inputValueRef.current.value);
    }, [])

    useImperativeHandle(ref, () => ({
        focus() {
          inputElementRef.current.focus();
        },
    }));

    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(_ref: any, value) {
                inputValueRef.current.value = '';
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            }
        })
    }, [])

    const toggleShowText = useCallback(() => {
        setShowTest(!showText);
        setShowTextIcon(!showText ? 'eye' : 'eye-off');
    }, [showText, showTextIcon])

    return (
        <>
            { label && (<LabelInput>{label}</LabelInput>)}
            <Container hasError={!!error} hasFocus={hasFocus}>
                { icon &&
                    <Icon
                        name={icon}
                        size={20}
                        color={hasFocus || hasContent ? '#0B75D7' : '#666360'}
                    />
                }
                <TextInput
                    ref={inputElementRef}
                    placeholder="Digite um conteúdo"
                    placeholderTextColor="#666360"
                    secureTextEntry={type === 'password' && showText === false ? true : false }
                    keyboardAppearance="dark"
                    defaultValue={defaultValue}
                    onChangeText={value => {
                        inputValueRef.current.value = value;
                    }}
                    onBlur={inputHasBlur}
                    onFocus={inputHasFocus}
                    {...rest}
                />

                <Icon
                    name={showTextIcon}
                    size={20}
                    color={hasFocus || hasContent ? '#0B75D7' : '#666360'}
                    style={{ display: type !== 'password' ? 'none' : 'flex' }}
                    onPress={ () => toggleShowText() }
                />
            </Container>
            { error && (
                <TextError>{error}</TextError>
            )}
        </>
    );
}

export default forwardRef(Input);
