import {NativeModules} from 'react-native';
import type { NativeNetworkMonitorSpec, StartOptions } from './specs/NativeNetworkMonitor';

const MODULE_NAME = 'NetworkMonitorReactNative';

function missingNativeModuleError(): never {
  throw new Error(
    `${MODULE_NAME} is not linked. Rebuild the app after installing the package and running pod install on iOS.`
  );
}

function getNativeModule(): NativeNetworkMonitorSpec {
  const nativeModule = NativeModules?.[MODULE_NAME] as NativeNetworkMonitorSpec | undefined;
  if (!nativeModule) missingNativeModuleError();
  return nativeModule;
}

export async function startNetworkMonitor(options?: StartOptions): Promise<void> {
  return getNativeModule().start(options);
}

export async function stopNetworkMonitor(): Promise<void> {
  return getNativeModule().stop();
}

export async function sendTestRequest(url?: string): Promise<number> {
  return getNativeModule().sendTestRequest(url);
}

export const NetworkMonitor = {
  start: startNetworkMonitor,
  stop: stopNetworkMonitor,
  sendTestRequest,
};
