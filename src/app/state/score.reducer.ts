import { Action, createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./score.actions";

export const initialState: number = 0;

export const scoreReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0)
);
