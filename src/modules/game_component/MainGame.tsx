import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './main.game.style';
import SelectContainer from '../option_select/select_container/SelectContainer';
import { IStore } from '../../store/store.types';
import GameResolution from '../game_resolution/GameResolution';

function MainGame() {
  const [selected, setSelected] = useState<boolean>(false);
  const [count, setCount] = useState(0);
  const optionChoice = useSelector((store: IStore) => store.gameReducer.option);
  const userSelected = useSelector((store: IStore) => store.gameReducer.selected);
  useEffect(() => {
    setSelected(userSelected);
    setCount(count + 1);
  }, [optionChoice]);
  if (selected) {
    return (
      <Container>
        <GameResolution choice={optionChoice} />
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
