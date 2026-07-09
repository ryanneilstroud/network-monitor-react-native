# iOS packaging notes

This package embeds the Periscope iOS bridge directly in the pod target.

Consumers do not need to add an SPM dependency in their app project.

## Current linking flow

1. RN autolinking resolves `ios/PeriscopeBridge.podspec`
2. Pod compiles the bridge + embedded `NetworkMonitorKit` Swift sources
3. App uses the JS API without additional Xcode package setup
