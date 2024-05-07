import { NextUIProvider } from "@nextui-org/react"
import "@pantheon-systems/nextjs-kit/style.css"
import { AppProps } from "next/app"
import { ReactNode } from "react"

import "../styles/globals.css"

function App({ Component, pageProps }: AppProps) {
  // make sure we don't output invalid `hrefLang` values
  if (!process.env.NEXT_PUBLIC_FRONTEND_URL) {
    delete pageProps.hrefLang
  }

  return (
    <NextUIProvider>
      <Component {...pageProps} />;
    </NextUIProvider>
  )
}

export default App
