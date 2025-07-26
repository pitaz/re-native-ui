import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Select, SelectOption } from '../Select/Select';

type ControlledSelectProps =  {
  name: string;
  control: Control<any>;
  rules: any;
  options: SelectOption[];
};

export const ControlledSelect = ({ name, control, rules, options, ...rest }: ControlledSelectProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState }) => (
        <Select
          options={options}
          onChange={onChange}
          value={value}
          error={fieldState.error?.message}
          {...rest}
        />
      )}
    />
  );
};
