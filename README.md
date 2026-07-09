# @ryanneilstroud/periscope-react-native

React Native bridge for `Periscope` with low-friction installation.

## Status

Implemented for iOS via React Native native module + CocoaPods autolinking.

## Install

1. `npm install @ryanneilstroud/periscope-react-native`
2. `npx pod-install`
3. Rebuild the iOS app

No app-side SPM setup is required.

## Usage

```ts
import { Periscope } from '@ryanneilstroud/periscope-react-native';

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
import { capture, stop } from '@ryanneilstroud/periscope-react-native';
```

## Platform support

- iOS: supported
- Android: not implemented yet
