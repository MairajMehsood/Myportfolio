import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/portfolioimg.png";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
          My name is Mairaj Mehsood, currently pursuing Bachelor of Science in Iqra University. I am a passionate front-end developer based in Pakistan.
          </StyledParagraph>
          <StyledParagraph>
          I love to design and create responsive websites or web apps from scratch. The technologies, tools and languages I am using to build my projects are HTML, CSS, JavaScript, REACT JS, TailwindCSS, Bootstrap Git and GitHub, Figma and VS Code.
          </StyledParagraph>
          <StyledParagraph>
          I have eagerness to learn something new every day and I love to share my knowledge to my fellow students and developers. And I am looking forward to talk with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-jmairajmehsood"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
