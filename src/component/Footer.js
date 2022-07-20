import React, { Component } from 'react';
import { Divider } from '@material-ui/core';

export default class Footer extends Component {
     render() {
          return (
               <div className='footer'>
                    <div className='basdepage'>
                         <p className='nm_o'>
                              Our community is amazing. Join the gang.
                         </p>

                         <div className='rseau_soc'>
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
                         <Divider />
                    </div>
               </div>
          );
     }
}
