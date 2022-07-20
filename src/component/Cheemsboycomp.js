import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React, { FC, useMemo, useEffect, useState, useCallback } from 'react';
import {
     motion,
     useViewportScroll,
     LayoutGroup,
     useAnimation,
} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BsFillCircleFill } from 'react-icons/bs';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'https://cheems.co';

function computeDate(x, v) {
     return Math.floor(x / v);
}

export const Cheemsboycomp: FC = () => {
     const { connection } = useConnection();
     const { publicKey, sendTransaction } = useWallet();

     const wallet = useWallet();

     const [response, setResponse] = useState('');
     const [timestamp, setTimestamp] = useState(''); // true when user got to press MINT

     const handlePlay = () => {
          if (!wallet.publicKey) {
               alert('Please connect your wallet');
          } else {
               const socket = socketIOClient(ENDPOINT);
               socket.emit(
                    'bet',
                    { publicKey: wallet.publicKey },
                    function (response) {
                         if (response == 'error') {
                              alert('No Cheems NFT available in your wallet !');
                         }
                    }
               );
          }
     };

     useEffect(() => {
          const socket = socketIOClient(ENDPOINT);
          socket.on('getInfo', (data: any) => {
               console.log('ntm');
               setTimestamp(data[2] - data[3]);
               setResponse(data);
          });
     }, []);

     useEffect(() => {
          const socket = socketIOClient(ENDPOINT);
          socket.on('error', (data: any) => {
               console.log('ok');
               alert(data);
          });
     }, []);

     useEffect(() => {
          const interval = setInterval(() => {
               setTimestamp(timestamp - 1);
          }, 1000);

          return () => clearInterval(interval);
     }, [timestamp]);

     return (
          <>
               <div className='body_cheemsboy'>
                    <div className='wrap_wrapgame'>
                         <h2>Cheemni Game</h2>
                         <h3>Win 1 $SOL</h3>

                         <div className='wrap_gameboy'>
                              <img
                                   className='cheemsboy'
                                   src='../images/cheemsboy.png'
                              />

                              {response[4] == 1 ? (
                                   <div className='times'>
                                        <div className='wrap_t'>
                                             <div className='number_wrap'>
                                                  <span>
                                                       {computeDate(
                                                            timestamp,
                                                            60 * 60
                                                       ) % 24}
                                                  </span>
                                             </div>
                                             <p>Hours</p>
                                        </div>
                                        <div>
                                             <div className='number_wrap'>
                                                  {' '}
                                                  <span>
                                                       {computeDate(
                                                            timestamp,
                                                            60
                                                       ) % 60}
                                                  </span>
                                             </div>
                                             <p>minutes</p>
                                        </div>
                                        <div>
                                             <div className='number_wrap'>
                                                  {' '}
                                                  <span>
                                                       {computeDate(
                                                            timestamp,
                                                            1
                                                       ) % 60}
                                                  </span>
                                             </div>
                                             <p>seconds</p>
                                        </div>
                                   </div>
                              ) : (
                                   <div className='times'>
                                        <div className='wrap_t'>
                                             <div className='number_wrap'>
                                                  <span>0</span>
                                             </div>
                                             <p>Hours</p>
                                        </div>
                                        <div>
                                             <div className='number_wrap'>
                                                  {' '}
                                                  <span>0</span>
                                             </div>
                                             <p>minutes</p>
                                        </div>
                                        <div>
                                             <div className='number_wrap'>
                                                  {' '}
                                                  <span>0</span>
                                             </div>
                                             <p>seconds</p>
                                        </div>
                                   </div>
                              )}

                              <div className='last_players'>
                                   <span className='lastp_text'>
                                        Last player:
                                   </span>
                                   <text
                                        numberOflines={1}
                                        style={{ width: 100 }}
                                        ellipsizeMode={'tail'}
                                        className='wallet_info'
                                   >
                                        {response[0]}
                                   </text>
                              </div>
                              <motion.button
                                   onClick={handlePlay}
                                   style={{
                                        backgroundImage:
                                             "url('../images/button_p.png')",
                                   }}
                                   className='btn_un_bet'
                                   type='submit'
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                              >
                                   <span className='text-pl'>Bonk</span>
                              </motion.button>
                         </div>

                         <div className='final_text'>
                              <img
                                   className='littlearrow'
                                   src='../images/littlearrow.png'
                              />
                              <p>
                                   You must have an NFT Cheems to participate
                                   and you can play once every 20 minutes.
                                   <span>The game is free.</span> If a player
                                   clicks the "Bonk" button, the counter reset
                                   back to 20 minutes. Good luck ! Bonk! Bonk!
                              </p>
                              <div className='flex_p'>
                                   <p>1- Connect your Phantom wallet</p>
                                   <p>2- Press Bonk</p>
                                   <p>
                                        3- The last player to click the "Bonk"
                                        button prior to the timer hitting zero
                                        win !
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};
