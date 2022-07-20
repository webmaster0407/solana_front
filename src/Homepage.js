import React, { Component } from 'react';
import Header from './component/Header';
import {
     motion,
     useViewportScroll,
     LayoutGroup,
     useAnimation,
} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Footer from './component/Footer';
import { BsFillCircleFill } from 'react-icons/bs';
import { Divider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

class Homepage extends React.Component {
     render() {
          return (
               <div className='home_h'>
                    <Header />
                    <div
                         className='entry_cheems_mob'
                         style={{
                              backgroundImage: "url('../images/mbck.png')",
                         }}
                    >
                         <h1 className='title_entry'>
                              Cheemsverse <br />a vibrant ecosystem
                         </h1>
                         <img
                              className='cheems-pfp-mobiles'
                              src='../images/cheems_pfp_p.png'
                         />
                         <p>
                              Join the official Cheems community of Web 3.0 !
                              Play the game, collect NFTs, and use our currency.{' '}
                         </p>
                         <div className='div_btn'>
                              <AnchorLink href='#buycheems'>
                                   <motion.button
                                        className='btn_un'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                   >
                                        <span>Buy $Cheems</span>
                                   </motion.button>
                              </AnchorLink>
                              <AnchorLink
                                   style={{ width: '100%' }}
                                   href='#game'
                              >
                                   <motion.button
                                        className='btn_g'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                   >
                                        <span>CHEEMS ARENA</span>
                                   </motion.button>
                              </AnchorLink>
                         </div>

                         <div className='wrap_arrow mobi'>
                              <AnchorLink href='#coinmetric'>
                                   <img
                                        className='arrow-top mobile'
                                        src='../images/arrow_top.png'
                                   />
                              </AnchorLink>
                         </div>
                    </div>
                    <div className='wrap_wrap'>
                         <div className='entry_cheems'>
                              <img
                                   className='absolute_circle'
                                   src='../images/ciircle.png'
                              />
                              <img
                                   className='absolute_circle_two'
                                   src='../images/circle_two.png'
                              />
                              <div className='wrap-entry'>
                                   <h1 className='title_entry'>
                                        Cheemsverse a vibrant ecosystem
                                   </h1>

                                   <p>
                                        Join the official Cheems community of
                                        Web 3.0 ! Play the game, collect NFTs,
                                        and use our currency.{' '}
                                   </p>

                                   <div className='div_btn'>
                                        <AnchorLink
                                             style={{ width: '100%' }}
                                             href='#buycheems'
                                        >
                                             <motion.button
                                                  className='btn_un'
                                                  whileHover={{ scale: 1.1 }}
                                                  whileTap={{ scale: 0.9 }}
                                             >
                                                  <span>Buy $Cheems</span>
                                             </motion.button>
                                        </AnchorLink>
                                        <AnchorLink
                                             style={{ width: '100%' }}
                                             href='#game'
                                        >
                                             <motion.button
                                                  className='btn_g'
                                                  whileHover={{ scale: 1.1 }}
                                                  whileTap={{ scale: 0.9 }}
                                             >
                                                  <span>CHEEMS ARENA</span>
                                             </motion.button>
                                        </AnchorLink>
                                   </div>
                              </div>
                         </div>
                         <div className='pfp_wrap'>
                              <img
                                   className='cheems-pfp'
                                   src='../images/cheems_pfp_p.png'
                              />
                         </div>
                         <div className='wrap_arrow'>
                              <AnchorLink href='#coinmetric'>
                                   <img
                                        className='arrow-top'
                                        src='../images/arrow_top.png'
                                   />
                              </AnchorLink>
                         </div>
                    </div>

                    <div className='about_us'>
                         <h2 id='coinmetric'>About Cheems</h2>
                         <div className='head_div'>
                              <p>
                                   $CHEEMS is the official token of the world
                                   famous Cheems meme that took the world by
                                   storm in 2017. Since launching in May 2021,
                                   The Cheems Token has grown into one of the
                                   largest memecoins in the Solana ecosystem
                                   with tens of thousands of followers from
                                   around the world. We believe that Cheems
                                   provides the perfect medium for a global
                                   community to Shop, Game, and Interact on Web
                                   3.0.
                              </p>
                              <img
                                   className='cheems-head'
                                   src='../images/cheems_logo_l.png'
                              />
                         </div>

                         <div className='tree_icon'>
                              <div
                                   style={{
                                        backgroundImage:
                                             "url('../images/bck_supply.png')",
                                   }}
                              >
                                   {' '}
                                   <img src='../images/coinn.svg' />{' '}
                                   <div>
                                        <span className='one_span'>
                                             Original Supply
                                        </span>
                                        <span className='two_span'>
                                             7,000,000,000
                                        </span>
                                   </div>
                              </div>
                              <div
                                   style={{
                                        backgroundImage:
                                             "url('../images/burned.png')",
                                   }}
                              >
                                   <img
                                        className='burned'
                                        src='../images/brunee.svg'
                                   />{' '}
                                   <div>
                                        <span className='one_span'>Burned</span>
                                        <span className='two_span'>
                                             4,560,000,000
                                        </span>
                                   </div>
                              </div>
                              <div
                                   style={{
                                        backgroundImage:
                                             "url('../images/circulate.png",
                                   }}
                              >
                                   <img
                                        className='circulating'
                                        src='../images/circulatingg.svg'
                                   />{' '}
                                   <div>
                                        <span className='one_span'>
                                             Circulating
                                        </span>
                                        <span className='two_span'>
                                             2,440,000,000
                                        </span>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className='about_us secondo'>
                         <h2 className='b_ch'>Buy $Cheems</h2>
                         <div id='buycheems' className='logo_buy'>
                              <img
                                   className='bonk'
                                   src='../images/bonk_bas.png'
                              />
                              <motion.button
                                   onClick={() =>
                                        window.open(
                                             'https://jup.ag/swap/USDC-CHEEMS'
                                        )
                                   }
                                   className='buy_cheems'
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                              >
                                   <img src='../images/jup.png' />
                              </motion.button>

                              <div className='logo_buy'>
                                   <motion.button
                                        onClick={() =>
                                             window.open(
                                                  'https://solapeswap.io/#/market/5WVBCaUPZF4HP3io9Z56N71cPMJt8qh3c4ZwSjRDeuut'
                                             )
                                        }
                                        className='buy_cheems'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                   >
                                        <img src='../images/monkey.png' />
                                   </motion.button>
                              </div>
                              <div className='logo_buy'>
                                   <motion.button
                                        onClick={() =>
                                             window.open(
                                                  'https://catodex.com/#/market/5WVBCaUPZF4HP3io9Z56N71cPMJt8qh3c4ZwSjRDeuut'
                                             )
                                        }
                                        className='buy_cheems'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                   >
                                        <img src='../images/cat.png' />
                                   </motion.button>
                              </div>
                              <div className='logo_buy'>
                                   <motion.button
                                        onClick={() =>
                                             window.open(
                                                  'https://trade.dexlab.space/#/market/5WVBCaUPZF4HP3io9Z56N71cPMJt8qh3c4ZwSjRDeuut'
                                             )
                                        }
                                        className='buy_cheems'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                   >
                                        <img src='../images/sup.png' />
                                   </motion.button>
                              </div>
                              <div className='logo_buy'>
                                   <motion.button
                                        onClick={() =>
                                             window.open(
                                                  'https://www.fsynth.io/#/market/5WVBCaUPZF4HP3io9Z56N71cPMJt8qh3c4ZwSjRDeuut'
                                             )
                                        }
                                        className='buy_cheems'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                   >
                                        <img src='../images/fex.png' />
                                   </motion.button>
                              </div>
                              <div className='logo_buy'>
                                   <motion.button
                                        onClick={() =>
                                             window.open(
                                                  'https://www.bitrue.com/trade/cheems_usdt'
                                             )
                                        }
                                        className='buy_cheems'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                   >
                                        <img src='../images/bitrue.png' />
                                   </motion.button>
                              </div>
                         </div>
                         <p className='buy_p'>
                              Click on one of the icons to buy cheems
                         </p>
                         <div className='start_guide_wrap'>
                              <h2 className='hlast'>Start Guide </h2>
                         </div>
                         <div className='container_start_guide'>
                              <img
                                   className='arr-star'
                                   src='../images/arrr.svg'
                              />
                              <div className='steps_n'>
                                   <img
                                        className='qdeu'
                                        src='../images/stepone.svg'
                                   />
                                   <Divider className='step_divider' />
                                   <div>
                                        <h3 className='start_guide_h'>
                                             Purchase SOL on a reputable
                                             exchange
                                        </h3>
                                        <p>
                                             To start, buy SOL on well-known
                                             exchanges such as Binance, FTX,
                                             Kraken or Coinbase.
                                        </p>
                                   </div>
                              </div>

                              <div className='steps_n'>
                                   <img
                                        className='qdeu'
                                        src='../images/steptwo.svg'
                                   />
                                   <Divider className='step_divider' />
                                   <div>
                                        <h3 className='start_guide_h'>
                                             Set-up a Solana wallet and copy
                                             address
                                        </h3>
                                        <p>
                                             Download the Phantom wallet
                                             extension for Google Chrome,
                                             Microsoft Edge, Firefox, or the
                                             Brave Browser Link:{' '}
                                             <a
                                                  href='https://phantom.app'
                                                  style={{
                                                       color: '#f8aa5a',
                                                       fontWeight: 'bold',
                                                       display: 'inline',
                                                  }}
                                             >
                                                  https://phantom.app
                                             </a>{' '}
                                             . Once you have created your
                                             wallet, you will need click on the
                                             top where it says Wallet # as this
                                             will copy your wallet address to
                                             your clipboard.
                                        </p>
                                   </div>
                              </div>

                              <div className='steps_n'>
                                   <img
                                        className='qdeu'
                                        src='../images/steptree.svg'
                                   />
                                   <Divider className='step_divider' />
                                   <div>
                                        <h3 className='start_guide_h'>
                                             Send SOL from your Exchange wallet
                                             to your Phantom wallet
                                        </h3>
                                        <p>
                                             To begin, Identify your SOL within
                                             your exchange wallet and select
                                             withdraw. At this point, it should
                                             ask you how much you would like to
                                             withdraw along with the receiving
                                             address. This is where you paste
                                             your address from the previous step
                                             to complete the withdrawal of
                                             funds.
                                        </p>
                                   </div>
                              </div>

                              <div className='steps_n'>
                                   <img
                                        className='qdeu'
                                        src='../images/stepforth.svg'
                                   />
                                   <Divider className='step_divider' />
                                   <div>
                                        <h3 className='start_guide_h'>
                                             Converting SOL to $Cheems on
                                             Jupiter Swap
                                        </h3>
                                        <p>
                                             {' '}
                                             First, go to{' '}
                                             <a
                                                  href='https://jup.ag/swap/USDC-CHEEMS'
                                                  style={{
                                                       color: '#f8aa5a',
                                                       fontWeight: 'bold',
                                                       display: 'inline',
                                                  }}
                                             >
                                                  Jupiter
                                             </a>{' '}
                                             then click on Connect at the top
                                             right of the screen. Once your
                                             wallet is connected, you will
                                             select ‘You pay: SOL’ and ‘You
                                             receive: USDC’ and then click Swap
                                             at the bottom. Once you have
                                             completed the above step repeat the
                                             same process to Convert USDC to
                                             CHEEMS on Jupiter Swap.
                                        </p>
                                   </div>
                              </div>
                              <img
                                   className='pizza'
                                   src='../images/pizza.png'
                              />
                         </div>
                    </div>
                    <div className='wrap_border'>
                         <img className='deco_un' src='../images/deco_un.png' />
                         <img className='deco' src='../images/deco.png' />
                         <div className='part_pfp'>
                              <img
                                   className='cheemies_logo'
                                   src='../images/logo_cheemies.png'
                              />
                              <img
                                   className='glasses'
                                   src='../images/glasses.png'
                              />
                              <img
                                   className='red-hat'
                                   src='../images/red_hat.png'
                              />
                              <img
                                   className='proppeller-hat'
                                   src='../images/proppeler_hat.png'
                              />
                              <img
                                   className='goggle'
                                   src='../images/googgle.png'
                              />

                              <div className='text_pfp'>
                                   <div className='first_pfp'>
                                        <h2>
                                             CHEEMIES{' '}
                                             <span style={{ color: '#ffb43b' }}>
                                                  3D PFP
                                             </span>
                                        </h2>
                                        <p>
                                             Crafted from the ground up to
                                             capture the essence of Cheems in
                                             vivid 3D detail, Cheemies are the
                                             next evolution of Cheems for a
                                             modern Web 3.0. CONNECT your
                                             Cheemies NFT with our vibrant
                                             ecosystem, BUILD your reputation,
                                             and BECOME a Cheemsverse legend.
                                             BONK! BONK!
                                        </p>
                                        <motion.button
                                             className='btn_g'
                                             whileHover={{ scale: 1.1 }}
                                             whileTap={{ scale: 0.9 }}
                                             style={{
                                                  backgroundImage:
                                                       "url('../images/btn_bc.png')",
                                             }}
                                        >
                                             <span>Coming soon</span>
                                             <img
                                                  className='moutarde'
                                                  src='../images/moutarde.png'
                                             />
                                        </motion.button>
                                   </div>
                                   <img
                                        className='pfp_z'
                                        src='../images/pfp_z.png'
                                   />
                              </div>
                              <div className='pfp_flex'>
                                   <img
                                        className='pfp_f'
                                        src='../images/pfp_u.png'
                                   />
                                   <img
                                        className='pfp_f'
                                        src='../images/pfp_d.png'
                                   />
                                   <img
                                        className='pfp_f'
                                        src='../images/pfp_t.png'
                                   />
                                   <img
                                        className='pfp_f'
                                        src='../images/pfp_q.png'
                                   />
                              </div>
                              <Divider />
                         </div>
                    </div>

                    <div
                         className='part_game'
                         id='game'
                         style={{
                              backgroundImage: "url('../images/bck_arena.png')",
                         }}
                    >
                         <div className='laptop_wrap_game'>
                              <div className='img_class_game'>
                                   <img
                                        className='logo'
                                        src='../images/arenalogo.png'
                                   />
                              </div>
                              <div className='wrap_h2'>
                                   <h2>
                                        Powered by{' '}
                                        <span style={{ color: '#ffe669' }}>
                                             $CHEEMS
                                        </span>
                                   </h2>
                              </div>
                              <div className='cards_display'>
                                   <img
                                        className='cards_one'
                                        src='../images/card_one.png'
                                   />
                                   <img
                                        className='cards_two'
                                        src='../images/card_two.png'
                                   />
                                   <img
                                        className='cards_tree'
                                        src='../images/card_tree.png'
                                   />
                                   <img
                                        className='cards_forth'
                                        src='../images/card_forth.png'
                                   />
                                   <img
                                        className='cards_five'
                                        src='../images/card_five.png'
                                   />
                              </div>
                              <p>
                                   Cheems Arena is a{' '}
                                   <span
                                        style={{
                                             color: '#ffe669',
                                             fontWeight: 'bold',
                                        }}
                                   >
                                        F2P
                                   </span>{' '}
                                   and{' '}
                                   <span
                                        style={{
                                             color: '#ffe669',
                                             fontWeight: 'bold',
                                        }}
                                   >
                                        P2E
                                   </span>{' '}
                                   strategy Trading Card Game that pits players
                                   against each other in 1v1 battles. Unlike
                                   traditional trading card games , Cheems Arena
                                   grants users with the ability to own real
                                   game assets that they purchase or earn from
                                   playing the game.This innovative P2E economy
                                   is made possible by the{' '}
                                   <span
                                        style={{
                                             color: '#ffe669',
                                             fontWeight: 'bold',
                                        }}
                                   >
                                        Solana Blockchain{' '}
                                   </span>
                                   which provides the necessary technology for
                                   the projects NFTs, Marketplace, and Tokens
                                   ($CHEEMS) to function.
                              </p>
                              <a
                                   style={{ width: '100%' }}
                                   target='_blank'
                                   href='https://cheemsarena.com'
                              >
                                   <motion.button
                                        className='btn_g'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                   >
                                        <span>Learn more</span>
                                   </motion.button>
                              </a>
                              <div className='dp_flex_justify'>
                                   <img
                                        className='illustration'
                                        src='../images/orc-shiba-layered-.png'
                                   />
                                   <img
                                        className='illustration_two'
                                        src='../images/illustrationtwo_p.png'
                                   />
                              </div>
                         </div>
                    </div>
                    <div className='wrap_w'>
                         <div
                              className='road_map'
                              id='roadmap'
                              style={{
                                   backgroundImage:
                                        "url('../images/bck_g.png')",
                              }}
                         >
                              <h2>
                                   What’s{' '}
                                   <span style={{ color: '#ffb43b' }}>
                                        Cooking?
                                   </span>
                              </h2>
                              <div className='road_content'>
                                   <div className='wrap_mbimage'>
                                        {' '}
                                        <img
                                             className='road_img'
                                             src='../images/mobile_roadmap.png'
                                        />
                                        <img
                                             className='road_img_laptop'
                                             src='../images/mobile_roadmap_laptop.png'
                                        />
                                        <img
                                             className='absolut_road qun'
                                             src='../images/absolute_r.png'
                                        />
                                        <img
                                             className='absolut_road qdeux'
                                             src='../images/absolute_r.png'
                                        />
                                        <img
                                             className='absolut_road qtrois'
                                             src='../images/absolute_r.png'
                                        />
                                        <img
                                             className='absolut_road qquatre'
                                             src='../images/absolute_r.png'
                                        />
                                   </div>

                                   <div
                                        className='title_sec'
                                        style={{
                                             backgroundImage:
                                                  "url('../images/burger_mobile.png')",
                                        }}
                                   >
                                        <div className='letuce'>
                                             <h3>Q2 2022</h3>
                                             <img
                                                  className='tomato'
                                                  src='../images/tomato.png'
                                             />
                                        </div>
                                        <p>
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             Cheems Arena - Website & Blog
                                             <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             Cheems Arena UX/UI <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             Cheems Arena - Gameplay Mechanic{' '}
                                             <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             3D PFP - Design Character Items and
                                             Skins <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             DAO - Lore Building and Newsletters
                                        </p>
                                        <div className='letuce'>
                                             <h3>Q3 2022</h3>{' '}
                                             <img
                                                  className='oignon'
                                                  src='../images/oignon.png'
                                             />
                                        </div>
                                        <p>
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             Cheems Arena - Marketing <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             Cheems Arena - Gameplay Videos{' '}
                                             <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />{' '}
                                             Cheems Arena - Open Beta
                                             <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             Cheems Arena - Marketplace <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             3D PFP - Finalize Design
                                        </p>
                                        <div className='letuce'>
                                             <h3>Q4 2022</h3>{' '}
                                             <img
                                                  className='steack'
                                                  src='../images/steack.png'
                                             />
                                        </div>
                                        <p>
                                             <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             Cheems Arena - Full Launch <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             Cheems Arena - Events <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             3D PFP - Marketing <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             3D PFP - Launch <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             DAO - Game Nights and NFT Gated
                                             Community
                                        </p>
                                        <div className='letuce'>
                                             <h3>Q1 2023</h3>{' '}
                                             <img
                                                  className='salad'
                                                  src='../images/salad.png'
                                             />
                                        </div>
                                        <p>
                                             <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             DAO - Platform Launch
                                             <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             Cheems Arena - Card Set 2 <br />
                                             <BsFillCircleFill
                                                  size={7}
                                                  style={{ marginRight: 5 }}
                                             />
                                             Cheems Arena - Mobile
                                        </p>
                                   </div>

                                   <div className='title_sec_laptop'>
                                        <h3>Q2 2022</h3>
                                        <div>
                                             <p>
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  Cheems Arena - Website & Blog
                                                  <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  Cheems Arena UX/UI <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  Cheems Arena - Gameplay
                                                  Mechanic <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  3D PFP - Design Character
                                                  Items and Skins <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  DAO - Lore Building and
                                                  Newsletters
                                             </p>
                                        </div>
                                        <h3>Q3 2022</h3>{' '}
                                        <div>
                                             <p>
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  Cheems Arena - Marketing{' '}
                                                  <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  Cheems Arena - Gameplay Videos{' '}
                                                  <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />{' '}
                                                  Cheems Arena - Open Beta
                                                  <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  Cheems Arena - Marketplace{' '}
                                                  <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  3D PFP - Finalize Design
                                             </p>
                                        </div>
                                        <h3>Q4 2022</h3>{' '}
                                        <div>
                                             <p>
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  Cheems Arena - Full Launch{' '}
                                                  <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  Cheems Arena - Events <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  3D PFP - Marketing <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  3D PFP - Launch <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  DAO - Game Nights and NFT
                                                  Gated Community
                                             </p>
                                        </div>
                                        <h3>Q1 2023</h3>{' '}
                                        <div>
                                             {' '}
                                             <p>
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  DAO - Platform Launch
                                                  <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  Cheems Arena - Card Set 2{' '}
                                                  <br />
                                                  <BsFillCircleFill
                                                       size={7}
                                                       style={{
                                                            marginRight: 5,
                                                       }}
                                                  />
                                                  Cheems Arena - Mobile
                                             </p>
                                        </div>
                                   </div>
                                   <div className='wrap_burger'>
                                        <img
                                             className='burger_r'
                                             src='../images/burger_rr.png'
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>

                    <Footer />
               </div>
          );
     }
}
export default Homepage;
