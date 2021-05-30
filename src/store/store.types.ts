export type IState = {
  score: number,
  selected: boolean,
  option: string | null
};

export type IAction = {
  type: string,
  payload?: boolean,
};

export type IStore = {
  gameReducer: IState
};