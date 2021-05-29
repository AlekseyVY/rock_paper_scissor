import React from 'react';
import { Container, ContentContainer, RulesContainer } from './main.styles';
import ScoreComponent from '../score_component/ScoreComponent';
import Rules from '../rules/Rules';
import MainGame from '../game_component/MainGame';

function Main() {
  return (
    <Container>
      <ContentContainer>
        <ScoreComponent />
        <MainGame />
        <RulesContainer>
          <Rules />
        </RulesContainer>
      </ContentContainer>
    </Container>
  );
}

export default Main;
