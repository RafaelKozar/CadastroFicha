import { useField } from 'formik';
import {Form, Label, Select as Tt} from 'semantic-ui-react';
import { Select } from '@chakra-ui/react'
import React from 'react';

interface Props {
    placeholder : string;
    name: string;    
    label?: string;
}

export default function MySelectInput(props: Props){
    const [field, meta, helpers] = useField(props.name);

    const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            <label>{props.label}</label>
            
            <select {...field} {...props}>
                {valores.map((v, index) => 
                    <option key={index} value={v}>{v}</option>
                )}
            </select>
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </>
    )
}