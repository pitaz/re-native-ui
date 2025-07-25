import React from 'react';
import { TextInputProps } from 'react-native';
import { Input } from '../Input/Input';

interface TextAreaProps extends TextInputProps {
  label?: string;
  error?: string;
  rows?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  rows = 4,
  style,
  ...props
}) => {
  return (
    <Input
      label={label}
      error={error}
      multiline
      numberOfLines={rows}
      style={[{ textAlignVertical: 'top', height: rows * 24 }, style]}
      {...props}
    />
  );
};
