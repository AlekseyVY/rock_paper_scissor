import React from 'react';
import {
  BotContainer, Container, Path, TopContainer,
} from './select.container.styles';
import SelectElement from '../../select_element/Select.element';

function SelectContainer() {
  return (
    <Container>
      <TopContainer>
        <SelectElement element="PAPER" />
        <SelectElement element="" />
      </TopContainer>
      <BotContainer>
        <SelectElement element="ROCK" />
      </BotContainer>
      <Path>
        <svg width="306" height="277" viewBox="0 0 306 277" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M292.5 7.5C292.5 7.5 0.895138 7.5 5.57388
          7.5C10.2526 7.5 153.466 261.5 153.466 261.5L292.5 7.5Z"
            stroke="black"
            strokeWidth="15"
          />
        </svg>
      </Path>
    </Container>
  );
}

export default SelectContainer;
