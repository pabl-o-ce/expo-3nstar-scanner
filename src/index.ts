import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Expo3nstarScanner.web.ts
// and on native platforms to Expo3nstarScanner.ts
import Expo3nstarScannerModule from './Expo3nstarScannerModule';
import Expo3nstarScannerView from './Expo3nstarScannerView';
import { ChangeEventPayload, Expo3nstarScannerViewProps } from './Expo3nstarScanner.types';

// Get the native constant value.
export const PI = Expo3nstarScannerModule.PI;

export function hello(): string {
  return Expo3nstarScannerModule.hello();
}

export async function setValueAsync(value: string) {
  return await Expo3nstarScannerModule.setValueAsync(value);
}

const emitter = new EventEmitter(Expo3nstarScannerModule ?? NativeModulesProxy.Expo3nstarScanner);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { Expo3nstarScannerView, Expo3nstarScannerViewProps, ChangeEventPayload };
