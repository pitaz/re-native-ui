/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  Box,
  Text,
  Stack,
  Spacer,
  Divider,
  Container,
  ThemeProvider,
  useToggleColorMode,
  Button,
  Input,
  TextArea,
  PasswordInput,
  FormProvider,
  ControlledInput,
  StepperInput,
  CheckBox,
  Switch,
  DatePicker,
  MaskedInput,
  TagInput,
  OTPInput,
  Slider
} from 'react-native-ui';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const Demo = () => {
  const toggleTheme = useToggleColorMode();
 

  return ( 
    <Box p="md" bg="background">
      <Text variant="heading">Hello Theme</Text>
      <Button onPress={toggleTheme}>Toggle Theme</Button>
    </Box>
  );
};

const InputDemo = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const toggleTheme = useToggleColorMode();

  return (
    <Box p="md" bg="background">
      <Text variant="heading">Input Demo</Text>
      <Input
        label="Email"
        placeholder="Enter your email"
        value={value}
        onChangeText={setValue}
        keyboardType="email-address"
        autoCapitalize="none"
        error={error}
        style={{ width: '100%' }}
      />
      <Spacer size={12} />
      <Button
        onPress={() => {
          if (!value.includes('@')) {
            setError('Please enter a valid email');
          } else {
            setError('');
          }
        }}
      >
        Submit
      </Button>
      <Spacer size={12} />
      <Button onPress={toggleTheme}>Toggle Theme</Button>
    </Box>
  );
};

const TextAreaDemo = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const toggleTheme = useToggleColorMode();

  return (
    <Box p="md" bg="background">
      <Text variant="heading">Text Area Demo</Text>
      <TextArea
        label="Message"
        placeholder="Enter your message"
        value={value}
        onChangeText={setValue}
        error={error}
        style={{ width: '100%' }}

      />
    </Box>
  );
};

const PasswordInputDemo = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const toggleTheme = useToggleColorMode();

  return (
    <Box p="md" bg="background">
      <Text variant="heading">Password Input Demo</Text>
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        value={value}
        onChangeText={setValue}
        error={error}
      />
    </Box>
  );
};

const FormDemo = () => {
  const schema = yup.object({
    email: yup.string().required('Email required').email(),
    password: yup.string().min(6, 'Too short').required('Password required'),
  });

  const { control, handleSubmit } = useForm<{ email: string; password: string }>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });

  return (
    <Box p="md" bg="background">
      <Text variant="heading">Form Demo</Text>
 


      <FormProvider
        defaultValues={{ email: '', password: '' }}
        schema={schema}
      >
        <ControlledInput  name="email" label="Email" control={control} rules={{ required: true }} style={{ width: '100%' }} />
        <ControlledInput name="password" label="Password" control={control} rules={{ required: true }} style={{ width: '100%' }} />
        <Button onPress={handleSubmit(data => console.log(data))}>Submit</Button>
      </FormProvider>
    </Box>
  );
};

const StepperInputDemo = () => {
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState('');

  return (
    <Box p="md" bg="background">
      <Text variant="heading">Stepper Input Demo</Text>
      <StepperInput
  label="Number of Guests"
  value={guests}
  onChange={(value) => {
    setGuests(value);
    if (value > 8) {
      return setError("Maximum 8 guests allowed");
    } else {
      setError("");
    }
  }}
  min={1}
  max={10}
  error={error}
/>
    </Box>
  );
};

const CheckboxDemo = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Box p="md" bg="background">
      <Text variant="heading">Checkbox Demo</Text>
      <CheckBox
        label="I agree to the terms and conditions"
        value={isChecked}
        onChange={setIsChecked}
      />
    </Box>
  );
};

const SwitchDemo = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <Box p="md" bg="background">
      <Text variant="heading">Switch Demo</Text>
      <Switch
  label="Enable notifications"
  value={isEnabled}
  onChange={setIsEnabled}
/>
    </Box>
  );
};

const DatePickerDemo = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Box p="md" bg="background">
      <Text variant="heading">Date Picker Demo</Text>
      <DatePicker
        label="Select Date"
        value={date}
        onChange={setDate}
      />
    </Box>
  );
};

const MaskedInputDemo = () => {
  const [value, setValue] = useState('');
  return (
    <Box p="md" bg="background">
      <Text variant="heading">Masked Input Demo</Text>
      <MaskedInput
        label="Phone Number"
        value={value}
        onChangeText={setValue}
        maskType="phone"
      />
    </Box>
  );
};

const TagInputDemo = () => {
  const [tags, setTags] = useState<string[]>([]);
  return (
    <Box p="md" bg="background">
      <Text variant="heading">Tag Input Demo</Text>
      <TagInput
        label="Tags"
        tags={tags}
        onChange={setTags}
      />
    </Box>
  );
};

const OTPInputDemo = () => {
  const [otp, setOtp] = useState('');
  return (
    <Box p="md" bg="background">
      <Text variant="heading">OTP Input Demo</Text>
      <OTPInput
        length={4}
        value={otp}
        onChangeText={(text) => setOtp(text)}
      />
    </Box>
  );
};

const SliderDemo = () => {  
  const [volume, setVolume] = useState(50);
  return (
    <Box p="md">
      <Text variant="heading">Slider Demo - Value: {volume}</Text>
      <Slider
  label="Volume"
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  step={5}
  showTooltip
/>
      <Spacer size={12} />
      <Button onPress={() => setVolume(Math.floor(Math.random() * 100))}>
        Random Value
      </Button>
    </Box>
  );
};

export default function App() {

  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Container style={{ backgroundColor: 'background' }}>
          <Box p="md" bg="background">
            <Text variant="heading">Welcome to the UI Library</Text>
            <Spacer size={12} />
            <Divider />
            <Spacer size={12} />
            <Stack spacing={8}>
              <Text variant="body">This is body text</Text>
              <Text variant="caption">And this is a caption</Text>
            </Stack>
          </Box>
          {/* <InputDemo /> */}
          {/* <Demo /> */}
          {/* <TextAreaDemo /> */}
          {/* <PasswordInputDemo /> */}
          {/* <FormDemo /> */}
          {/* <StepperInputDemo /> */}
          {/* <CheckboxDemo />
          <SwitchDemo /> */}
          <DatePickerDemo />
          {/* <MaskedInputDemo /> */}
          {/* <TagInputDemo /> */}
          {/* <OTPInputDemo /> */}
          <SliderDemo />
        </Container>
        <StatusBar barStyle="dark-content" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
