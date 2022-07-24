import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <SWRConfig
          value={{
            fetcher: (url: string) => axios.get(url).then((res) => res.data),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default MyApp;
