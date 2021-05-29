import React from 'react';
import { Container, ContentContainer, RulesContainer } from './main.styles';
import ScoreComponent from '../score_component/ScoreComponent';
import SelectContainer from '../option_select/select_container/SelectContainer';
import Rules from '../rules/Rules';

function Main() {
  return (
    <Container>
      <ContentContainer>
        <ScoreComponent />
        <SelectContainer />
        <RulesContainer>
          <Rules />
        </RulesContainer>
      </ContentContainer>
    </Container>
  );
}

export default Main;
