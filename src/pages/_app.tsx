/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import '../styles/global.scss';
import { AppProps } from 'next/app';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}