import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  LeftBlock,
  LeftBlockBot,
  LeftBlockTop,
  RightBlock,
  RightBlockBot,
  RightBlockTop,
} from './game.resolution.style';
import ChoiceRender from '../choice_render/ChoiceRender';
// import { optionSelectAction } from '../../store/gameReducer';
// import { IStore } from '../../store/store.types';

type choiceProp = {
  choice: string | null
};

function GameResolution({ choice }: choiceProp) {
  // const optionChoice = useSelector((store: IStore) => store.gameReducer.option);
  // console.log(optionChoice);
  // const dispatch = useDispatch();
  // onClick={() => dispatch(optionSelectAction(null))}
  return (
    <Container>
      <LeftBlock>
        <LeftBlockTop>
          you picked
        </LeftBlockTop>
        <LeftBlockBot>
          <ChoiceRender choice={choice} />
        </LeftBlockBot>
      </LeftBlock>
      <RightBlock>
        <RightBlockTop>
          the house picked
        </RightBlockTop>
        <RightBlockBot>
          AI SELECTION
        </RightBlockBot>
      </RightBlock>
    </Container>
  );
}

export default GameResolution;
