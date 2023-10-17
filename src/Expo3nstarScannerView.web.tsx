import * as React from 'react';

import { Expo3nstarScannerViewProps } from './Expo3nstarScanner.types';

export default function Expo3nstarScannerView(props: Expo3nstarScannerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
