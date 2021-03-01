import { Action, createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./score.actions";

export const initialState = {
  score: 0
};

export const scoreReducer = createReducer(
  initialState,
  on(increment, state => ({ ...state, score: state.score + 1 })),
  on(decrement, state => ({ ...state, score: state.score - 1 })),
  on(reset, state => ({ ...state, score: 0 }))
);
