import { AppProvider } from '@/components/AppProvider';
import PublicLayout from '@/components/layout/PublicLayout';
import { getCookieFromHeader } from '@/libs/cookies';

import { LayoutAppProps, Layouts } from '@/types/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import { AppContextType } from 'next/dist/shared/lib/utils';
import { useEffect } from 'react';

import '@/styles/globals.css'

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: LayoutAppProps) => {

  const Layout = Layouts[Component.Layout] ?? PublicLayout;

  useEffect(() => {
    console.log('App...........');
    // console.log(pageProps);
    // document.body.className = pageProps?.theme || 'default';
  });

  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </AppProvider>
  )

}

App.getInitialProps = async ({ ctx: { req } }: AppContextType) => {
  console.log('getInitialProps...........')
  console.log(getCookieFromHeader(req?.headers.cookie, 'myCookieName'));
  return {

  };
};

export default appWithTranslation(App);