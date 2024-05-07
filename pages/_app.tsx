import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import '@pantheon-systems/nextjs-kit/style.css';
import { ReactNode } from 'react';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	// make sure we don't output invalid `hrefLang` values
	if (!process.env.NEXT_PUBLIC_FRONTEND_URL) {
		delete pageProps.hrefLang;
	}

	return (
		<NextUIProvider>
			<Component {...pageProps} />;
		</NextUIProvider>
	);
}

export default App;
