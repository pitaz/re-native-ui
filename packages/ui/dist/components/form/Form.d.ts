import React from 'react';
import { FieldValues, DefaultValues } from 'react-hook-form';
import * as yup from 'yup';
type FormProps<T extends FieldValues> = {
    defaultValues: DefaultValues<T>;
    children: React.ReactNode;
    schema?: yup.ObjectSchema<T>;
};
export declare const FormProvider: <T extends FieldValues>({ defaultValues, children, schema }: FormProps<T>) => React.JSX.Element;
export {};
