/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
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
  Slider,
  SlideDownToast,
  Accordion,
  Stepper,
  GridList,
  StaggeredGrid,
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

  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });

  return (
    <Box p="md" bg="background">
      <Text variant="heading">Form Demo</Text>

      <FormProvider defaultValues={{ email: '', password: '' }} schema={schema}>
        <ControlledInput
          name="email"
          label="Email"
          control={control}
          rules={{ required: true }}
          style={{ width: '100%' }}
        />
        <ControlledInput
          name="password"
          label="Password"
          control={control}
          rules={{ required: true }}
          style={{ width: '100%' }}
        />
        <Button onPress={handleSubmit(data => console.log(data))}>
          Submit
        </Button>
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
        onChange={value => {
          setGuests(value);
          if (value > 8) {
            return setError('Maximum 8 guests allowed');
          } else {
            setError('');
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
      <DatePicker label="Select Date" value={date} onChange={setDate} />
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
      <TagInput label="Tags" tags={tags} onChange={setTags} />
    </Box>
  );
};

const OTPInputDemo = () => {
  const [otp, setOtp] = useState('');
  return (
    <Box p="md" bg="background">
      <Text variant="heading">OTP Input Demo</Text>
      <OTPInput length={4} value={otp} onChangeText={text => setOtp(text)} />
    </Box>
  );
};

const SliderDemo = () => {
  const [volume, setVolume] = useState(0);
  return (
    <Box p="md">
      <Text variant="heading">Slider Demo - Value: {volume}</Text>
      <Slider
        label="Volume"
        value={volume}
        onChange={setVolume}
        min={0}
        max={100}
        // step={5}
        showTooltip
      />
      <Spacer size={12} />
      {/* <Button onPress={() => setVolume(Math.floor(Math.random() * 100))}>
        Random Value
      </Button> */}
    </Box>
  );
};

const SlideDownToastDemo = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const showSuccess = () => {
    setToastVisible(true);
  };

  return (
    <Box p="md" bg="background">
      <Button onPress={showSuccess}>Show Success Toast</Button>

      <SlideDownToast
        message="Saved successfully!"
        variant="success"
        visible={toastVisible}
        duration={2000}
        onHide={() => setToastVisible(false)}
      />
    </Box>
  );
};

const AccordionDemo = () => {
  const items = [
    { title: 'Item 1', content: 'This is the content of the accordion' },
    { title: 'Item 2', content: 'This is the content of the accordion' },
    { title: 'Item 3', content: 'This is the content of the accordion' },
  ];
  return (
    <Box p="md" bg="background">
      <Text variant="heading">Accordion Demo</Text>
      <Accordion title="Accordion 1">
        <Text>This is the content of the accordion</Text>
      </Accordion>
    </Box>
  );
};

type CartItem = {
  id: string;
  name: string;
  price: number;
};

const CheckoutScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cart] = useState<CartItem[]>([
    { id: '1', name: 'T-Shirt', price: 19.99 },
    { id: '2', name: 'Jeans', price: 49.99 },
  ]);
  const [shipping, setShipping] = useState({
    name: '',
    address: '',
    city: '',
    postal: '',
  });
  const [payment, setPayment] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const steps = ['Cart', 'Shipping', 'Payment', 'Review', 'Done'];

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const shippingCost = 5.0;
  const total = subtotal + shippingCost;

  const next = () => setCurrentStep(s => Math.min(s + 1, steps.length - 1));
  const back = () => setCurrentStep(s => Math.max(s - 1, 0));

  return (
    <SafeAreaView style={styles.container}>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepPress={setCurrentStep}
      />

      <ScrollView
        style={styles.content}
        keyboardShouldPersistTaps="handled"
        bouncesZoom
      >
        {currentStep === 0 && (
          <View>
            <FlatList
              data={cart}
              keyExtractor={i => i.id}
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <Text>{item.name}</Text>
                  <Text>${item.price.toFixed(2)}</Text>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={styles.divider} />}
            />
            <View style={styles.row}>
              <Text style={styles.bold}>Subtotal</Text>
              <Text style={styles.bold}>${subtotal.toFixed(2)}</Text>
            </View>
          </View>
        )}

        {currentStep === 1 && (
          <View>
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={shipping.name}
              onChangeText={text => setShipping(s => ({ ...s, name: text }))}
            />
            <Input
              label="Address"
              placeholder="123 Main St"
              value={shipping.address}
              onChangeText={text => setShipping(s => ({ ...s, address: text }))}
            />
            <Input
              label="City"
              placeholder="City"
              value={shipping.city}
              onChangeText={text => setShipping(s => ({ ...s, city: text }))}
            />
            <Input
              label="Postal Code"
              placeholder="ZIP"
              value={shipping.postal}
              onChangeText={text => setShipping(s => ({ ...s, postal: text }))}
            />
          </View>
        )}

        {currentStep === 2 && (
          <View>
            <Input
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              value={payment.cardNumber}
              onChangeText={text =>
                setPayment(p => ({ ...p, cardNumber: text }))
              }
            />
            <View style={styles.row}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <Input
                  label="Expiry"
                  placeholder="MM/YY"
                  value={payment.expiry}
                  onChangeText={text =>
                    setPayment(p => ({ ...p, expiry: text }))
                  }
                />
              </View>
              <View style={{ flex: 1 }}>
                <Input
                  label="CVV"
                  placeholder="123"
                  secureTextEntry
                  value={payment.cvv}
                  onChangeText={text => setPayment(p => ({ ...p, cvv: text }))}
                />
              </View>
            </View>
          </View>
        )}

        {currentStep === 3 && (
          <View>
            <Text style={styles.sectionTitle}>Order Summary</Text>
            <View style={styles.row}>
              <Text>Items</Text>
              <Text>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.row}>
              <Text>Shipping</Text>
              <Text>${shippingCost.toFixed(2)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.bold}>Total</Text>
              <Text style={styles.bold}>${total.toFixed(2)}</Text>
            </View>
            <Text style={styles.sectionTitle}>Shipping To</Text>
            <Text>{shipping.name}</Text>
            <Text>{shipping.address}</Text>
            <Text>
              {shipping.city}, {shipping.postal}
            </Text>
          </View>
        )}

        {currentStep === 4 && (
          <View style={styles.center}>
            <Text style={styles.thanks}>Thank you for your purchase!</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        {currentStep > 0 && currentStep < steps.length - 1 && (
          <Button variant="outline" onPress={back}>
            Back
          </Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button onPress={next}>
            {currentStep === steps.length - 2 ? 'Confirm Order' : 'Next'}
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

const GridDemo = () => {
  // unsplash photos with varying aspect ratios
  // use smaller size photos
  const photos = [
    {
      id: '1',
      uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      aspectRatio: 1,
    },

    {
      id: '2',
      uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      aspectRatio: 1.5,
    },
    {
      id: '3',
      uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      aspectRatio: 2,
    },
    {
      id: '4',
      uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      aspectRatio: 0.5,
    },
    {
      id: '5',
      uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      aspectRatio: 0.7,
    },
    {
      id: '6',
      uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      aspectRatio: 1.5,
    },
  ];
  return (
    <Box p="md" bg="background">
      <Text variant="heading">Grid Demo</Text>
      {/* <GridList
        data={photos}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{ width: '100%', height: 200 }}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        spacing="sm"
      /> */}

      <StaggeredGrid
        data={photos}
        keyExtractor={p => p.id}
        numColumns={{ sm: 1, md: 2, lg: 3 }}
        spacing="md"
        getItemHeight={(photo, colW) => colW / photo.aspectRatio}
        renderItem={({ item }) => (
          <View style={{ width: '100%', aspectRatio: item.aspectRatio }}>
            <Image
              source={{ uri: item.uri }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </Box>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Container style={{ backgroundColor: 'background' }}>
          {/* <InputDemo /> */}
          {/* <Demo /> */}
          {/* <TextAreaDemo /> */}
          {/* <PasswordInputDemo /> */}
          {/* <FormDemo /> */}
          {/* <StepperInputDemo /> */}
          {/* <CheckboxDemo />
          <SwitchDemo /> */}
          {/* <DatePickerDemo /> */}
          {/* <MaskedInputDemo /> */}
          {/* <TagInputDemo /> */}
          {/* <OTPInputDemo /> */}
          {/* <SliderDemo /> */}
          {/* <SlideDownToastDemo /> */}
          {/* <AccordionDemo /> */}
          {/* <CheckoutScreen /> */}
          <GridDemo />
        </Container>
        <StatusBar barStyle="dark-content" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 16 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  nextButton: { marginLeft: 8 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  divider: { height: 1, backgroundColor: '#eee' },
  bold: { fontWeight: '600' },
  sectionTitle: { marginTop: 16, marginBottom: 8, fontWeight: '600' },
  center: { alignItems: 'center', marginTop: 32 },
  thanks: { fontSize: 18, fontWeight: '600' },
});
