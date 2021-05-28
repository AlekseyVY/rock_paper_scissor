import React from 'react';
import { Container, ContentContainer } from './main.styles';
import ScoreComponent from '../score_component/ScoreComponent';

function Main() {
  return (
    <Container>
      <ContentContainer>
        <ScoreComponent />
      </ContentContainer>
    </Container>
  );
}

export default Main;
