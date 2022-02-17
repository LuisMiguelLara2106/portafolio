import React from 'react';

import 'boxicons';

import {
    FooterContainer,
    FooterContent,
    FooterBack,
    FooterTitle,
    FooterButtonFloat,
    FloatButton,
    FooterLinks,
    LinkedIn
} from './FooterElements';

const Footer = () => {
  return (
      <>
          <FooterContainer>
              <FooterContent>
                  <FooterBack>
                  </FooterBack>
                  <FooterTitle>
                    Interested in working with me?  
                  </FooterTitle>
                  <FooterButtonFloat>
                            <FloatButton>
                                LET'S TALK!
                            </FloatButton>
                  </FooterButtonFloat>
                  <FooterLinks>
                      <LinkedIn>
                        {/* <box-icon border='circle' size="50px" name='linkedin-square' type='logo' color='#477ac1' ></box-icon> */}
                      </LinkedIn>
                  </FooterLinks>
              </FooterContent>
          </FooterContainer>
      </>
  );
};

export default Footer;
