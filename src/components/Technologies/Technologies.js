import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologyIcon,
} from "../styles/Technologies.styled";
import { iconsData } from "./icons";

const Technologies = () => {
  return (
    <TechnologiesContainer id="tech">
      <TechnologiesHeader>Technologies I am familiar with</TechnologiesHeader>

      <TechnologiesIcons>
        {iconsData.map((iconData) => {
          return (
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}s
              {...iconData}
            />
          );
        })}
      </TechnologiesIcons>
    </TechnologiesContainer>
  );
};

export default Technologies;
