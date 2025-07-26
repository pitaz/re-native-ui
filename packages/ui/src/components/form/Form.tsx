import React from 'react';
import { useForm, FormProvider as RHFormProvider, FieldValues, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormProps<T extends FieldValues> = {
  defaultValues: DefaultValues<T>;
  children: React.ReactNode;
  schema?: yup.ObjectSchema<T>;
};

export const FormProvider = <T extends FieldValues>({ defaultValues, children, schema }: FormProps<T>) => {
  const methods = useForm<T>({ 
    defaultValues,  
    mode: 'onChange', 
    resolver: schema ? yupResolver(schema) as any : undefined 
  });

  return (
    <RHFormProvider {...methods}>
       {children}
    </RHFormProvider>
  );
};
