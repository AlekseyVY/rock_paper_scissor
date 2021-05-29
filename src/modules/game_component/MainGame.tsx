import React, { useEffect, useState } from 'react';
import { Container } from './main.game.style';
import SelectContainer from '../option_select/select_container/SelectContainer';

function MainGame() {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(false);
  }, []);
  if (selected) {
    return (
      <Container>
        SELECTED
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
