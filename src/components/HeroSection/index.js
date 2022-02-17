import React, { useState } from 'react';

import Modal from '../Modal/index'

// import logo from '../../assets/Home/figura-mobile.svg';
// import ImageBg from '../../assets/Home/hero';
import img3Mob from '../../assets/Home/figura-mobile.svg'


import { 
    HeroContainer,
    HeroParent, 
    HeroDetails, 
    HeroDetailsName, 
    PrimaryText, 
    HeroDetailsRole,
    SecondaryText, 
    HeroButtonFloat, 
    FloatButton, 
    HeroImagMobile
} from './HeroSectionElements';

const HereSection = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
      };


  return (
      <>
        <HeroContainer id="Home">
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <HeroParent >
                <HeroDetails>
                    <HeroDetailsName>
                        <PrimaryText>
                            Hi, I’m Miguel 
                        </PrimaryText>
                    </HeroDetailsName>
                    <HeroDetailsRole>
                        <SecondaryText>
                            A passionate electronic engineer and web developer
                        </SecondaryText>
                    </HeroDetailsRole>
                    <HeroImagMobile src={img3Mob} className='hero-image'/> 
                    <HeroButtonFloat>
                            <FloatButton onClick={openModal}>
                                LET'S TALK!
                            </FloatButton>
                    </HeroButtonFloat>
                </HeroDetails>
            </HeroParent>
        </HeroContainer>
      </>
  )
};

export default HereSection;
