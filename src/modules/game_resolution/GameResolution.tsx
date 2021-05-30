import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
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
  const aiSelection = aiSelect();
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
          {choice}
        </MiddleBlockTop>
        <MiddleBlockBot>
          <AgainButton>
            {choice}
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
