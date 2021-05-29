export type IState = {
  score: number,
  selected: boolean
};

export type IAction = {
  type: string,
  payload?: boolean
};

export type IStore = {
  gameReducer: IState
};