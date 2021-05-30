import React, { useEffect, useState } from 'react';
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
import { optionSelectAction, updateScoreActon } from '../../store/gameReducer';

type choiceProp = {
  choice: string | null
};

function GameResolution({ choice }: choiceProp) {
  const aiSelection = aiSelect();
  const [condition] = useState<string | null>(winnerCheck(choice, aiSelection));
  const dispatch = useDispatch();
  useEffect(() => {
    if (condition === 'you won') {
      dispatch(updateScoreActon());
    }
  }, []);
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

export default React.memo(GameResolution);
