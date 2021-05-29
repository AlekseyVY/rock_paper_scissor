import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, MainScore, Title } from './score.module.styles';
import { IStore } from '../../../store/store.types';

function Score() {
  const [gameScore, setGameState] = useState(0);
  const score = useSelector((store: IStore) => store.gameReducer.score);
  useEffect(() => {
    setGameState(score);
  }, []);
  return (
    <Container>
      <Title>
        score
      </Title>
      <MainScore>
        {gameScore}
      </MainScore>
    </Container>
  );
}

export default Score;
