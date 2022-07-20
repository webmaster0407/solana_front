import React, { Component } from 'react';
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
import { saveAs } from 'file-saver'

class Stickers extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               stickers: '',
               api: false,
               ongoing: false,
               input:''
          };
     }

     handleText(e) {
       this.setState({ stickers: '' });
       this.setState({ ongoing: false });
       this.setState({ input: e.target.value });
     }

     onClickDownload() {
       saveAs('https://cheems.co/images-stickers/'+this.state.input+'.png', 'image.png')
     }

     onClick() {
          var self = this;
          this.setState({ api: 'true' });
          this.setState({ ongoing: true });

          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token_id: this.state.input })
          };
          fetch('https://cheems.co/api/', requestOptions)
              .then(response => response.json())
              .then(data => {
                   self.setState({ stickers: 'true' });
                   self.setState({ api: false });
              });
     }

     render() {
          return (
               <div
                    className='stick-wrap'
                    style={{
                         backgroundImage: "url('../images/stick.svg')",
                    }}
               >
                    <Header />
                    <div className='wrap_sti'>
                         <div className='sticker_div'>
                              <h2 className='h2_stick'>The sticker machine</h2>
                              {this.state.ongoing == true ? (
                                   false
                              ) : (
                                   <p className='title-sticker'>
                                        Enter a cheems number and click on "LFG"
                                   </p>
                              )}

                              {this.state.api == false ? (
                                   false
                              ) : (
                                   <p className='title-sticker'>
                                        Loading , please wait
                                   </p>
                              )}

                              {this.state.stickers == '' ? (
                                   false
                              ) : (
                                   <img
                                        className='stickers-image'
                                        src={'https://cheems.co/images-stickers/'+this.state.input+'.png'}
                                   />
                              )}
                              <div className='input-stick'>
                                   <input
                                        type='text'
                                        onChange={(e) => this.handleText(e)}
                                        placeholder='Type your number'
                                   />

                                   {this.state.stickers == '' ? (
                                     <motion.button
                                          className='btn_un_stick'
                                          type='submit'
                                          onClick={() => this.onClick()}
                                          whileHover={{ scale: 1.1 }}
                                          whileTap={{ scale: 0.9 }}
                                     >
                                          <span>Lfg</span>
                                     </motion.button>
                                   ) : (
                                     <motion.button
                                          className='btn_un_stick'
                                          type='submit'
                                          onClick={() => this.onClickDownload()}
                                          whileHover={{ scale: 1.1 }}
                                          whileTap={{ scale: 0.9 }}
                                     >
                                          <span>Download</span>
                                     </motion.button>
                                   )}


                              </div>
                         </div>
                    </div>
                    <Footer />
               </div>
          );
     }
}
export default Stickers;
