import { slide as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import {
     motion,
     useViewportScroll,
     LayoutGroup,
     useAnimation,
} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Header extends Component {
     showSettings(event) {
          event.preventDefault();
     }

     render() {
          return (
               <>
                    <div className='menu_mob'>
                         {' '}
                         <div className='ch_log'>
                              <img
                                   className='w_logo'
                                   src='../images/newlogo.png'
                              />{' '}
                              <span className='ch_name'>Cheems</span>
                         </div>
                         <Menu
                              styles={styles}
                              right
                              customBurgerIcon={<img src='../images/io.svg' />}
                         >
                              <a
                                   className='menu-item--small'
                                   href='/#buycheems'
                              >
                                   Buy $CHEEMS
                              </a>
                              <a className='menu-item--small' href='/#roadmap'>
                                   Roadmap
                              </a>
                              <a className='menu-item--small' href='/#game'>
                                   Game
                              </a>
                              <a
                                   className='menu-item--small'
                                   href='/#coinmetric'
                              >
                                   Coinmetric
                              </a>

                              <img
                                   className='bl_logo'
                                   src='../images/newlogo.png'
                              />

                              <div className='rseau'>
                                   <a
                                        href='https://twitter.com/cheemsverse'
                                        target='_blank'
                                   >
                                        <img src='../images/tw.png' />
                                   </a>
                                   <a
                                        href='http://discord.gg/jjMmTkVkcX'
                                        target='_blank'
                                   >
                                        <img src='../images/di.png' />
                                   </a>
                              </div>
                         </Menu>
                    </div>
                    <div className='menu_laptop'>
                         <motion.button
                              onClick={() => (window.location = '/')}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              style={{
                                   background: 'none',
                                   border: 'none',
                                   display: 'flex',
                                   gap: 15,
                              }}
                         >
                              <img
                                   className='w_logo'
                                   src='../images/newlogo.png'
                              />
                              <span className='ch_n'>Cheems</span>
                         </motion.button>
                         <div className='limenu'>
                              <AnchorLink
                                   style={{ width: '100%' }}
                                   href='#buycheems'
                              >
                                   <a>Buy $CHEEMS</a>
                              </AnchorLink>
                              <AnchorLink
                                   style={{ width: '100%' }}
                                   href='#roadmap'
                              >
                                   <a>Roadmap</a>
                              </AnchorLink>
                              <AnchorLink
                                   style={{ width: '100%' }}
                                   href='#game'
                              >
                                   <a>Game</a>
                              </AnchorLink>

                              <AnchorLink
                                   style={{ width: '100%' }}
                                   href='#coinmetric'
                              >
                                   <a>Coinmetric</a>
                              </AnchorLink>
                         </div>
                    </div>
               </>
          );
     }
}

var styles = {
     bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '36px',
     },
     bmBurgerBars: {
          background: 'white',
     },
     bmBurgerBarsHover: {
          background: '#a90000',
     },
     bmCrossButton: {
          height: '24px',
          width: '24px',
     },
     bmCross: {
          background: 'black',
     },
     bmMenuWrap: {
          position: 'fixed',
          height: '100%',
     },
     bmMenu: {
          background: '#F3F3F3',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em',
     },
     bmMorphShape: {
          fill: '#373a47',
     },
     bmItemList: {
          alignItems: 'center',
          color: 'black',
          padding: '0.8em',
          display: 'flex',
          flexDirection: 'column',
          borderWidth: 0,
          textDecoration: 'none',
          marginTop: 30,
     },
     bmItem: {
          display: 'inline-block',
          marginTop: 25,
     },
     bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)',
     },
};
