import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { Expo3nstarScannerViewProps } from './Expo3nstarScanner.types';

const NativeView: React.ComponentType<Expo3nstarScannerViewProps> =
  requireNativeViewManager('Expo3nstarScanner');

export default function Expo3nstarScannerView(props: Expo3nstarScannerViewProps) {
  return <NativeView {...props} />;
}
