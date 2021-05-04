# Camara Native

[![NPM](https://img.shields.io/npm/v/camara-native.svg)](https://www.npmjs.com/package/camara-native) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Netlify Status](https://api.netlify.com/api/v1/badges/6419e49e-e3d9-40fd-ba00-032ab4d09e80/deploy-status)](https://app.netlify.com/sites/camaradotspace/deploys)

Camara Native is an open-source design system consisting of a reusable component library, it provides user interface foundations for building accessible, beautiful and responsive web interfaces. It is built with React Native, TypeScript, Styled-components, Storybook and Chromatic.

Camara Native is a 🚧 work-in-progress, it is iOS focused for now and is still in beta.

## Install

```bash
npm i camara-native

# or

yarn add camara-native
```

## Usage

```tsx
import { View } from "react-native";
import { Button } from "camara-native";

const App = () => {
  return (
    <View>
      <Button>Camara Native</Button>
    </View>
  );
};

export default App;
```

## What's next

- [ ] Improve accessibility support
- [ ] Improve TypeScript support
- [ ] Write proper test for all components
- [ ] Improve docs for all components
- [ ] and more

## License

MIT © [Camaradotspace](https://github.com/Camaradotspace)
