import React from 'react';

import 'boxicons';

// import ImageDev from '../../assets/about/dev.gif';
// import ImageDesign from '../../assets/about/design.gif';

import {
    InfoContainer,
    InfoContent,
    InfoWrapper,
    InfoRow,
    InfoTittle,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    ImgWrap,
    ImagenPhoto,
    Line,
    Presentation,
    SkillsContainer,
    SkillDev,
    ImgDev,
    SkillDseign,
    ImgDesign,
    SubTitle
} from './AboutSectionElements';

const AboutSection = () => {
  return (
      <>
          <InfoContainer >
                <InfoContent>
                    <InfoTittle>
                        <Heading>About Me</Heading>
                        <TopLine>Why Choose me ?</TopLine>
                        <Line />
                    </InfoTittle>
                    <InfoWrapper>
                        <InfoRow >
                            <Column1>
                                <TextWrapper>
                                    <Presentation>
                                    I am a person passionate about my work, interested in learning something new every day that I can integrate into my personal and work projects.
                                    </Presentation>
                                    <Presentation>
                                    Here are a Few Highlights
                                    </Presentation>
                                    <SkillsContainer>
                                        <SkillDev>
                                            <ImgDev>
                                                <box-icon animation-duration='2s' border='circle' size="80px" name='code-block' animation='tada' color='#14bbec' ></box-icon>
                                                <SubTitle>Development</SubTitle>
                                                <Presentation>
                                                    HTML/CSS, JavaScript, React, Responsive Website
                                                </Presentation>
                                            </ImgDev>
                                        </SkillDev>
                                        <SkillDseign>
                                            <ImgDesign>
                                                <box-icon border='circle' size="80px" name='palette' type='solid' animation='tada' color='#14bbec' ></box-icon>
                                                <SubTitle>UI/UX</SubTitle>
                                                <Presentation>
                                                    Landing Pages, User Flow, Wireframing, Prototyping, Web App Design
                                                </Presentation>
                                            </ImgDesign>
                                        </SkillDseign>
                                    </SkillsContainer>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <ImagenPhoto />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContent>
            </InfoContainer> 
      </>
  );
};

export default AboutSection;
