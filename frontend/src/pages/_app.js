import { useEffect, useState } from 'react';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrumGoerli, localhost } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from "wagmi/providers/public";
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { LightNodeProvider } from "@waku/react";
import {
  injectedWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet
} from '@rainbow-me/rainbowkit/wallets';

import "../styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set the Light Node options
  const NODE_OPTIONS = { defaultBootstrap: true };

  const { chains, publicClient } = configureChains(
    [arbitrumGoerli],
    [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY ?? '' })],
  );

  const connectors = connectorsForWallets([
    {
      groupName: 'Popular',
      wallets: [
        injectedWallet({ chains }),
        metaMaskWallet({ projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? '', chains }),
        rainbowWallet({ projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? '', chains }),
        walletConnectWallet({ projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? '', chains }),
        coinbaseWallet({ appName: '', chains }),
      ],
    },
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        coolMode
        showRecentTransactions={false}
        theme={lightTheme({
          // accentColor: '#FF007A',
          // accentColorForeground: 'white',
          // borderRadius: 'none',
          // fontStack: 'system',
          // overlayBlur: 'small',
        })}
        modalSize="compact"
      >
        <LightNodeProvider options={NODE_OPTIONS}>
          <div className="min-h-screen bg-gradient">
            {isMounted && <Component {...pageProps} />}
          </div>
        </LightNodeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
