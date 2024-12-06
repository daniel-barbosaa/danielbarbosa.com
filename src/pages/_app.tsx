import "material-icons/iconfont/material-icons.css";
import "material-symbols/outlined.css";
import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider";
import ModalControlerProvider from "@/contexts/ModalControlerContext/ModalControlerContext";

 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalControlerProvider>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ModalControlerProvider>
  );
}
