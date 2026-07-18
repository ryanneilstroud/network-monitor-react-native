# @ryanneilstroud/periscope-react-native

React Native bridge for `PeriscopeKit` (iOS) and `PeriscopeAndroid` (Android) with low-friction installation.

## Status

Implemented for iOS and Android via React Native native module autolinking.

## Install

1. Install from npm:

```bash
pnpm add @ryanneilstroud/periscope-react-native
# or: npm install @ryanneilstroud/periscope-react-native
```

2. `npx pod-install --repo-update` (iOS)
3. Rebuild your app

## Usage

```ts
import {Periscope} from '@ryanneilstroud/periscope-react-native';

await Periscope.capture({
  receiver: {
    host: '192.168.1.100', // your Mac running Periscope Viewer
    port: 61337,
  },
});
```

Stop monitoring:

```ts
await Periscope.stop();
```

You can also call named exports:

```ts
import {capture, stop} from '@ryanneilstroud/periscope-react-native';
```

## Platform support

- iOS: supported
- Android: supported
