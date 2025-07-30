# Contributing to Re Native UI

Thank you for your interest in contributing to Re Native UI! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Development Guidelines](#development-guidelines)
- [Component Development](#component-development)
- [Testing](#testing)
- [Documentation](#documentation)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- React Native development environment
- Git

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-native-ui.git
   cd react-native-ui
   ```
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/pitaz/react-native-ui.git
   ```

## Development Setup

### Install Dependencies

```bash
# Install root dependencies
npm install

# Install package dependencies
cd packages/ui
npm install

# Install documentation dependencies
cd ../../docs
npm install
```

### Build the Package

```bash
# From the packages/ui directory
npm run build
```

### Run Documentation

```bash
# From the docs directory
npm start
```

### Run Example App

```bash
# From the example directory
npm install
npx react-native run-ios  # or run-android
```

## Project Structure

```
react-native-ui/
├── packages/
│   └── ui/                 # Main UI package
│       ├── src/
│       │   ├── components/ # All UI components
│       │   ├── theme/      # Theme configuration
│       │   └── index.ts    # Main exports
│       ├── dist/           # Built files
│       └── package.json
├── docs/                   # Documentation site
│   ├── docs/
│   │   ├── components/     # Component documentation
│   │   └── ...
│   └── docusaurus.config.ts
├── example/                # Example React Native app
└── package.json
```

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and formatting
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused

### TypeScript Guidelines

- Use strict TypeScript configuration
- Define proper interfaces for all props
- Use generic types where appropriate
- Avoid `any` type - use proper typing

### Component Guidelines

- Components should be functional components with hooks
- Use React.memo for performance optimization when needed
- Implement proper prop validation
- Follow the existing component patterns

## Component Development

### Creating a New Component

1. Create a new directory in `packages/ui/src/components/`
2. Create the component file (e.g., `MyComponent.tsx`)
3. Create an index file for exports
4. Add the component to the main exports in `packages/ui/src/index.ts`
5. Create documentation in `docs/docs/components/`
6. Add tests

### Component Template

```tsx
import React from "react";
import { ViewStyle, TextStyle } from "react-native";
import { useTheme } from "../theme/ThemeContext";

export interface MyComponentProps {
  /** Description of the prop */
  title?: string;
  /** Callback when component is pressed */
  onPress?: () => void;
  /** Custom styles */
  style?: ViewStyle;
  /** Custom text styles */
  textStyle?: TextStyle;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title = "Default Title",
  onPress,
  style,
  textStyle,
}) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // styles
  },
  text: {
    // styles
  },
});
```

### Theme Integration

- Use the theme context for styling
- Follow the existing theme structure
- Add theme variables when needed
- Ensure dark mode compatibility

## Testing

### Writing Tests

- Write unit tests for all components
- Test component props and callbacks
- Test theme integration
- Test accessibility features

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Test Structure

```tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { MyComponent } from "../MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    const { getByText } = render(<MyComponent title="Test" />);
    expect(getByText("Test")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <MyComponent title="Test" onPress={onPress} />
    );

    fireEvent.press(getByText("Test"));
    expect(onPress).toHaveBeenCalled();
  });
});
```

## Documentation

### Component Documentation

Each component should have comprehensive documentation:

1. **Overview**: What the component does
2. **Props**: All available props with types and descriptions
3. **Examples**: Basic and advanced usage examples
4. **Accessibility**: Accessibility considerations
5. **Theming**: Theme customization options

### Documentation Structure

````markdown
---
sidebar_position: 1
---

# Component Name

Brief description of the component.

## Props

| Prop  | Type   | Default | Description    |
| ----- | ------ | ------- | -------------- |
| title | string | -       | The title text |

## Examples

### Basic Usage

```tsx
import { ComponentName } from "re-native-ui";

<ComponentName title="Hello World" />;
```
````

### Advanced Usage

```tsx
// More complex example
```

## Accessibility

- Screen reader support
- Keyboard navigation
- Focus management

## Theming

Customization options and theme variables.

````

## Pull Request Process

### Before Submitting

1. Ensure your code follows the style guidelines
2. Add tests for new functionality
3. Update documentation
4. Test your changes thoroughly
5. Update the changelog if needed

### Pull Request Guidelines

1. **Title**: Use a clear, descriptive title
2. **Description**: Explain what the PR does and why
3. **Fixes**: Link to any related issues
4. **Screenshots**: Include screenshots for UI changes
5. **Testing**: Describe how you tested the changes

### PR Template

```markdown
## Description

Brief description of the changes.

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Documentation updated

## Screenshots (if applicable)

Add screenshots for UI changes.

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
````

## Release Process

### Versioning

We follow [Semantic Versioning](https://semver.org/):

- **Major**: Breaking changes
- **Minor**: New features (backward compatible)
- **Patch**: Bug fixes (backward compatible)

### Release Steps

1. Update version in `packages/ui/package.json`
2. Update changelog
3. Create release branch
4. Run full test suite
5. Build the package
6. Create GitHub release
7. Publish to npm

### Changelog

Keep the changelog updated with:

- New features
- Bug fixes
- Breaking changes
- Documentation updates

## Getting Help

- **Issues**: Create an issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check the docs for usage examples

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- GitHub contributors page

Thank you for contributing to Re Native UI!
