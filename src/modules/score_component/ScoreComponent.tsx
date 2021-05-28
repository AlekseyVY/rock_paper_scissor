import React from 'react';
import { Container, LeftBlock, RightBlock } from './score.styles';
import Score from './score_module/score';

function ScoreComponent() {
  return (
    <Container>
      <LeftBlock>
        ROCK
        PAPER
        SCISSORS
      </LeftBlock>
      <RightBlock>
        <Score />
      </RightBlock>
    </Container>
  );
}

export default ScoreComponent;
