import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
  Quote,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Mairaj Mehsood</Name>
        <Title>Front-end UI Developer</Title>
        <p>
          I <span className="change-text"></span>{" "}
          <span className="responsive">r</span>
          <span className="responsive">e</span>
          <span className="responsive">s</span>
          <span className="responsive">p</span>
          <span className="responsive">o</span>
          <span className="responsive">n</span>
          <span className="responsive">s</span>
          <span className="responsive">i</span>
          <span className="responsive">v</span>
          <span className="responsive">e</span> websites.
        </p>
        <StyledButtonsContainer>
          <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Projects</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>About me</span>
          </StyledButton>
        </StyledButtonsContainer>
     
      
        <Socials>
          <Social
            href="mailto:MairajMehsood2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/MairajMehsood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </Social>
          <Social
            href="https://www.linkedin.com/in/mairaj-mehsood-ab9835206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </Social>
        </Socials>
        <Quote>Don't wish for it! Work for it!</Quote>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
