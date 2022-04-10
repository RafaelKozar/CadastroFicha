import { useField } from 'formik';
import {Form, Select as Tjs} from 'semantic-ui-react';
import { Select } from '@chakra-ui/react'
import { FormLabel } from '@chakra-ui/react'
import React from 'react';

interface Props {
    placeholder : string;
    name: string;
    options: any;
    label?: string;
}

export default function MySelectInput(props: Props){
    const [field, meta, helpers] = useField(props.name);
    var valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
        
            <label>{props.label}</label>
            {/* <Tjs 
                fluid
                clearable
                options={props.options}
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}
            /> */}
            {/* <Select                
                value={props.options}
                onChange={(d) => helpers.setValue(d)}
                onBlur={() => helpers.setTouched(true)}
            /> */}
            <Select>
            {/* //  onChange={(d) => helpers.setValue(d)}
            //  onBlur={() => helpers.setTouched(true)}> */}
                {valores.map((option, index) =>
                    <option key={index} value={index}>
                        {option}
                    </option>
                )}
            </Select>
            {meta.touched && meta.error ? (
                <FormLabel  color='red'>{meta.error}</FormLabel>
            ) : null}
        </>
    )
}