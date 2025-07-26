import React, { useState } from 'react';
import {
  Modal,
  TouchableOpacity,
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Input } from '../Input/Input';
import { useTheme } from '../../theme/ThemeContext';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value: string | null;
  onChange: (value: string) => void;
  error?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const selected = options.find((opt) => opt.value === value);

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Input
          label={label}
          value={selected?.label || ''}
          placeholder={placeholder}
          editable={false}
          pointerEvents="none"
          rightIcon={<Text>▼</Text>}
          error={error}
        />
      </TouchableOpacity>

      <Modal visible={open} transparent animationType="slide">
        <TouchableOpacity
          style={styles.modalBackdrop}
          activeOpacity={1}
          onPress={() => setOpen(false)}
        >
          <View style={[styles.modalContent, { backgroundColor: theme.colors.background }]}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onChange(item.value);
                    setOpen(false);
                  }}
                >
                  <Text style={{ color: theme.colors.text }}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000088',
  },
  modalContent: {
    padding: 20,
    maxHeight: '50%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  option: {
    paddingVertical: 12,
  },
});
