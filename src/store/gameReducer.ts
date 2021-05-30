import { IAction, IState } from './store.types';

const UPDATE_SCORE = 'UPDATE_SCORE';
const SELECTED = 'SELECTED';
const GET_SCORE = 'GET_SCORE';
const OPTION_SELECT = 'OPTION_SELECT';

const initialState: IState = {
  score: 0,
  selected: false,
  option: null,
};

const gameReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_SCORE: {
      return {
        state,
      };
    }
    case OPTION_SELECT: {
      return {
        ...state,
        option: action.payload,
      };
    }
    case UPDATE_SCORE: {
      return {
        ...state,
        score: action.payload,
      };
    }
    case SELECTED: {
      return {
        ...state,
        selected: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const getScoreAction = () => ({ type: 'GET_SCORE' });

export const updateScoreActon = (data: number) => ({ type: 'UPDATE_SCORE', payload: data });

export const updateSelectedAction = (data: boolean) => ({ type: 'SELECTED', payload: data });

export const optionSelectAction = (data: string | null) => ({ type: 'OPTION_SELECT', payload: data });

export default gameReducer;
