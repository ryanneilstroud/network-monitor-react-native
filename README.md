# @ryanneilstroud/periscope-react-native

React Native bridge for `PeriscopeKit` (iOS) and `PeriscopeAndroid` (Android) with low-friction installation.

## Status

Implemented for iOS and Android via React Native native module autolinking.

### `1.2.0-beta.1`

This beta adds WebSocket capture on iOS through `PeriscopeKit 1.2.0-beta.1`.
WebSocket capture is currently iOS-only and is intended for debug builds. Android
continues to use `PeriscopeAndroid 0.5.5` and retains its existing HTTP capture
support; no Android WebSocket support is included in this beta.

## Install

1. Install from npm:

```bash
pnpm add @ryanneilstroud/periscope-react-native@beta
# or: npm install @ryanneilstroud/periscope-react-native@beta
```

2. `npx pod-install --repo-update` (iOS)
3. Rebuild your app

## Usage

```ts
import {Periscope} from '@ryanneilstroud/periscope-react-native';

await Periscope.capture({
  receiver: {
    host: 'localhost', // simulator only; use your Mac LAN IP on physical devices
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

- iOS: HTTP and native `URLSessionWebSocketTask` capture
- Android: HTTP capture through `PeriscopeAndroid 0.5.5`; WebSocket capture is not yet supported

## iOS WebSocket beta limitations

The beta dynamically observes native `URLSessionWebSocketTask` send and receive
operations, so no WebSocket-specific React Native integration is required beyond
starting Periscope normally. Capture is best effort: it does not cover third-party
socket implementations, lower-level networking APIs, or traffic that occurred
before Periscope started. Keep Periscope disabled in release builds.
