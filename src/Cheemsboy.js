import React, { FC, useMemo } from 'react';
import {
     ConnectionProvider,
     WalletProvider,
     useWallet,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
     GlowWalletAdapter,
     LedgerWalletAdapter,
     PhantomWalletAdapter,
     SlopeWalletAdapter,
     SolflareWalletAdapter,
     SolletExtensionWalletAdapter,
     SolletWalletAdapter,
     TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
     WalletModalProvider,
     WalletDisconnectButton,
     WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import {
     motion,
     useViewportScroll,
     LayoutGroup,
     useAnimation,
} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Footer from './component/Footer';
import { BsFillCircleFill } from 'react-icons/bs';
import Header from './component/Header';
import socketIOClient from 'socket.io-client';
import { Cheemsboycomp } from './component/Cheemsboycomp';
const ENDPOINT = 'http://localhost:4040/';

require('@solana/wallet-adapter-react-ui/styles.css');

const Cheemsboy: FC = () => {
     // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
     const network = WalletAdapterNetwork.Devnet;
     const { publicKey, sendTransaction } = useWallet();

     // You can also provide a custom RPC endpoint.
     const endpoint = useMemo(() => clusterApiUrl(network), [network]);
     const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);

     // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
     // Only the wallets you configure here will be compiled into your application, and only the dependencies
     // of wallets that your users connect to will be loaded.
     const onClick = () => {
          console.log(base58);
     };

     const wallets = useMemo(
          () => [
               new PhantomWalletAdapter(),
               new GlowWalletAdapter(),
               new SlopeWalletAdapter(),
               new SolflareWalletAdapter({ network }),
               new TorusWalletAdapter(),
          ],
          [network]
     );

     return (
          <div
               className='body_cheemsboy_un'
               style={{
                    backgroundImage: "url('../images/bck_g.png')",
               }}
          >
               <ConnectionProvider endpoint={endpoint}>
                    <WalletProvider wallets={wallets} autoConnect>
                         <WalletModalProvider>
                              <div className='flex_wallet'>
                                   <Header />
                                   <WalletMultiButton />
                                   <WalletDisconnectButton />
                              </div>
                              <Cheemsboycomp />
                         </WalletModalProvider>
                    </WalletProvider>
               </ConnectionProvider>
               <Footer />
          </div>
     );
};

export default Cheemsboy;
