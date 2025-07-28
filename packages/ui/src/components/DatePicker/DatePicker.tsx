import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface DatePickerProps {
  label?: string;
  value?: Date;
  onChange: (date: Date) => void;
  error?: string;
  minimumYear?: number;
  maximumYear?: number;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value = new Date(),
  onChange,
  error,
  minimumYear = 1950,
  maximumYear = new Date().getFullYear(),
}) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [tempDate, setTempDate] = useState(value);

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    label: {
      marginBottom: theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text,
    },
    pickerTrigger: {
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      backgroundColor: theme.colors.background,
    },
    triggerText: {
      color: theme.colors.text,
      fontSize: theme.fontSizes.md,
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContent: {
      backgroundColor: theme.colors.background,
      margin: 20,
      borderRadius: 12,
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    pickerRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    column: {
      flex: 1,
      height: 150,
    },
    item: {
      padding: 10,
      textAlign: 'center',
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
    },
    selected: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    errorText: {
      color: 'red',
      fontSize: theme.fontSizes.sm,
      marginTop: 4,
    },
  });

  const years = Array.from(
    { length: maximumYear - minimumYear + 1 },
    (_, i) => minimumYear + i
  );
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const updateDate = (type: 'year' | 'month' | 'day', val: number) => {
    const newDate = new Date(tempDate);
    if (type === 'year') newDate.setFullYear(val);
    if (type === 'month') newDate.setMonth(val - 1);
    if (type === 'day') newDate.setDate(val);
    setTempDate(newDate);
  };

  const formatDate = (d: Date) =>
    `${d.getFullYear()}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        style={styles.pickerTrigger}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.triggerText}>{formatDate(value)}</Text>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}

      <Modal transparent visible={visible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onChange(tempDate);
                  setVisible(false);
                }}
              >
                <Text style={{ color: theme.colors.primary }}>Confirm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pickerRow}>
              {[
                { data: years, key: 'year', selected: tempDate.getFullYear() },
                {
                  data: months,
                  key: 'month',
                  selected: tempDate.getMonth() + 1,
                },
                { data: days, key: 'day', selected: tempDate.getDate() },
              ].map(({ data, key, selected }) => (
                <FlatList
                  key={key}
                  data={data}
                  style={styles.column}
                  keyExtractor={(item) => item.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() =>
                        updateDate(key as 'year' | 'month' | 'day', item)
                      }
                    >
                      <Text
                        style={[
                          styles.item,
                          selected === item && styles.selected,
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
