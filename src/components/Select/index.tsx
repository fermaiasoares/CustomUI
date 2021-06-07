import React, { useEffect, useRef, useState } from 'react';
import { PickerProps, PickerItemProps } from '@react-native-picker/picker';
import { useField } from '@unform/core';

import { Container, Icon, SelectInput, TextError } from './styles';

interface IItem extends PickerItemProps {
    id: number;
}

interface SelectProps extends Omit<PickerProps, 'onValueChange'> {
    name: string;
    placeholder?: string;
    icon?: string;
    items: IItem[];
}

const Select: React.FC<SelectProps> = ({ name, icon, placeholder, items, ...rest }) => {
    const pickerRef = useRef<any>(null);
    const { fieldName, registerField, defaultValue = '', error } = useField(name);
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const [hasFocus, setHasFocus] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: pickerRef.current,
            getValue: ref => {
                return ref.props.selectedValue;
            },
            clearValue: ref => {
                ref.props.onValueChange(ref.props.selectedValue = "");
            },
            setValue: (_, value) => {
                setSelectedValue(value);
            },
        });
    }, [fieldName, registerField]);

    return (
        <>
            <Container
                hasError={!!error} hasFocus={hasFocus}
            >
                {icon &&
                    <Icon
                        name={icon}
                        size={20}
                        color={hasFocus || hasContent ? '#0B75D7' : '#666360'}
                    />
                }
                <SelectInput
                    ref={pickerRef}
                    selectedValue={selectedValue}
                    onValueChange={value => {
                        setSelectedValue(value);
                        setHasContent(value !== '' ? true : false);
                    }}
                    {...rest}
                >
                    <SelectInput.Item label={placeholder ?? 'Selecione'} value="" />
                    {
                        items && items.map(item => (
                            <SelectInput.Item key={item.id} label={item.label} value={item.value} />
                        ))
                    }
                </SelectInput>
                <Icon
                    name="chevron-down"
                    size={20}
                    color={hasFocus || hasContent ? '#0B75D7' : '#666360'}
                />
            </Container>
            { error && (
                <TextError>{error}</TextError>
            )}
        </>
    )
}

export default Select;
