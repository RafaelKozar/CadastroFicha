import { useField } from 'formik';
import { Form, Label, Input } from 'semantic-ui-react';
import InputMask from "react-input-mask";
import React from 'react';

interface Props {
    placeholder: string;
    name: string;
    type?: string;
    label?: string;
    mascara?: string;
}

export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name);

    // return (
    //     <Form.Field error={meta.touched && !!meta.error}>
    //         <label>{props.label}</label>
    //         <Input {...field} {...props} fluid></Input>
    //         {meta.touched && meta.error ? (
    //             <Label basic color='red'>{meta.error}</Label>
    //         ) : null}
    //     </Form.Field>
    // )

    if (props.mascara) {
        return (
            <Form.Field error={meta.touched && !!meta.error} >
                <label>{props.label}</label>
                <Input {...field} {...props} fluid>
                      <InputMask mask={props.mascara} placeholder='Celular'></InputMask> 
                </Input>
                {meta.touched && meta.error ? (
                    <Label basic color='red'>{meta.error}</Label>
                ) : null}
            </Form.Field>
        )
    }
    else {
        return (
            <Form.Field error={meta.touched && !!meta.error}>
                <label>{props.label}</label>
                <Input {...field} {...props} fluid></Input>
                {meta.touched && meta.error ? (
                    <Label basic color='red'>{meta.error}</Label>
                ) : null}
            </Form.Field>
        )
    }
}