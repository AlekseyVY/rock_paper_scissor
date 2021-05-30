import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { optionSelectAction, updateScoreActon } from '../../store/gameReducer';
import { IStore } from '../../store/store.types';

type choiceProp = {
  choice: string | null
};

function GameResolution({ choice }: choiceProp) {
  const score = useSelector((store: IStore) => store.gameReducer.score);
  console.log(score);
  const dispatch = useDispatch();
  const aiSelection = aiSelect();
  let condition = null;
  if (choice !== null) {
    condition = winnerCheck(choice, aiSelection);
    if (condition === 'you won') {
      console.log(condition);
      dispatch(updateScoreActon(score + 1));
    }
  }
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
