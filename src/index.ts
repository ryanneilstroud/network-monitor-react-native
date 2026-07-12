import {NativeModules} from 'react-native';
import type {CaptureOptions, NativePeriscopeSpec, ReceiverOptions} from './specs/NativeNetworkMonitor';

const MODULE_NAME = 'PeriscopeBridge';

function missingNativeModuleError(): never {
  throw new Error(
    `${MODULE_NAME} is not linked. Rebuild the app after installing the package and running pod install on iOS.`
  );
}

function getNativeModule(): NativePeriscopeSpec {
  const nativeModule = NativeModules?.[MODULE_NAME] as NativePeriscopeSpec | undefined;
  if (!nativeModule) missingNativeModuleError();
  return nativeModule;
}

function normalizeCaptureOptions(options?: CaptureOptions): CaptureOptions | undefined {
  if (!options) return undefined;

  if (options.receiver) {
    return {receiver: options.receiver};
  }

  const receiver: ReceiverOptions = {};
  if (options.host !== undefined) receiver.host = options.host;
  if (options.port !== undefined) receiver.port = options.port;
  return {receiver};
}

export async function capture(options?: CaptureOptions): Promise<void> {
  return getNativeModule().capture(normalizeCaptureOptions(options));
}

export async function stop(): Promise<void> {
  return getNativeModule().stop();
}

export async function sendTestRequest(url?: string): Promise<number> {
  return getNativeModule().sendTestRequest(url);
}

export const Periscope = {
  capture,
  stop,
  sendTestRequest,
};

export const NetworkMonitor = Periscope;
