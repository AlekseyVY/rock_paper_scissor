import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './main.game.style';
import SelectContainer from '../option_select/select_container/SelectContainer';
import { IStore } from '../../store/store.types';
import GameResolution from '../game_resolution/GameResolution';

function MainGame() {
  const [selected, setSelected] = useState<boolean>(false);
  const [option, setOption] = useState<string | null>(null);
  const optionChoice = useSelector((store: IStore) => store.gameReducer.option);
  console.log(optionChoice);
  useEffect(() => {
    if (optionChoice) {
      setSelected(true);
      setOption(optionChoice);
    } else {
      setSelected(false);
      setOption(optionChoice);
    }
  }, [optionChoice]);
  if (selected) {
    return (
      <Container>
        <GameResolution choice={option} />
      </Container>
    );
  }
  return (
    <Container>
      <SelectContainer />
    </Container>
  );
}

export default MainGame;
