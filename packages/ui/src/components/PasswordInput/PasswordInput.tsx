import React, { useState } from 'react';
import { TouchableOpacity, TextInputProps, View } from 'react-native';
import { Input } from '../Input/Input';
import { Text } from '../Text/Text';
import { useTheme } from '../../theme/ThemeContext';

interface PasswordInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  error,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const toggleVisibility = () => setVisible((prev) => !prev);

  return (
    <View>
      <Input
        label={label}
        error={error}
        secureTextEntry={!visible}
        rightElement={
          <TouchableOpacity onPress={toggleVisibility}>
            <Text style={{ color: theme.colors.primary }}>
              {visible ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        }
        {...props}
      />
    </View>
  );
};
