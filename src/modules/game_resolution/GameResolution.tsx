import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AgainButton,
  Container,
  LeftBlock,
  LeftBlockBot,
  LeftBlockTop, MiddleBlock, MiddleBlockBot, MiddleBlockTop,
  RightBlock,
  RightBlockBot,
  RightBlockTop,
} from './game.resolution.style';
import ChoiceRender from '../choice_render/ChoiceRender';
import { aiSelect } from '../../middleware/aiSelect';
import { winnerCheck } from '../../middleware/winnerCheck';
import { optionSelectAction } from '../../store/gameReducer';
// import { IStore } from '../../store/store.types';

type choiceProp = {
  choice: string | null
};

function GameResolution({ choice }: choiceProp) {
  // const optionChoice = useSelector((store: IStore) => store.gameReducer.option);
  // console.log(optionChoice);
  const dispatch = useDispatch();
  const aiSelection = aiSelect();
  const condition = winnerCheck(choice, aiSelection);
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
      <MiddleBlock>
        <MiddleBlockTop>
          {condition}
        </MiddleBlockTop>
        <MiddleBlockBot>
          <AgainButton onClick={() => dispatch(optionSelectAction(null))}>
            play again
          </AgainButton>
        </MiddleBlockBot>
      </MiddleBlock>
      <RightBlock>
        <RightBlockTop>
          the house picked
        </RightBlockTop>
        <RightBlockBot>
          <ChoiceRender choice={aiSelection} />
        </RightBlockBot>
      </RightBlock>
    </Container>
  );
}

export default GameResolution;
