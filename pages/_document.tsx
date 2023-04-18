import { useApp } from '@/components/AppProvider';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  const { theme } =  useApp();
  console.log("..... document : " + theme);

  return (
    <Html lang="en">
      <Head />
      <body className={theme}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
