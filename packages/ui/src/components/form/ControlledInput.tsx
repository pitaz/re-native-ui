import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input, InputProps } from '../Input/Input';

type ControlledInputProps = InputProps & {
  name: string;
  control: Control<any>;
  rules: any;
};


export const ControlledInput = ({ name, control, rules, ...rest }: ControlledInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <Input
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          error={fieldState.error?.message}
          {...rest}
        />
      )}
    />
  );
};
