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
  ControlledInput
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
        <ControlledInput  name="email" label="Email" control={control} rules={{ required: true }} />
        <ControlledInput name="password" label="Password" control={control} rules={{ required: true }} />
        <Button onPress={handleSubmit(data => console.log(data))}>Submit</Button>
      </FormProvider>
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
          <FormDemo />
        </Container>
        <StatusBar barStyle="dark-content" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
