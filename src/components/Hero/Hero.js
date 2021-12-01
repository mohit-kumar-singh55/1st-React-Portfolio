import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Prosonal Portfolio
      </SectionTitle>
      <SectionText>
        I'm <strong><em>Mohit Kumar Singh</em></strong>. A <strong><em>full Stack Developer</em></strong> currently learning Back-End Development. My purpose is to <strong><em>Add</em></strong> some value in people's life.
      </SectionText>
      <Button onclick={()=>{window.location = "https://www.linkedin.com/in/mohit-kumar-singh-128ab4217/"}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;