import "material-icons/iconfont/material-icons.css";
import "material-symbols/outlined.css";
import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider";
import ModalControlerProvider from "@/contexts/ModalControlerContext/ModalControlerContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalControlerProvider>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </ModalControlerProvider>
  );
}
