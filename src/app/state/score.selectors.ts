import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectScore = createSelector(
  (state: AppState) => state.score,
  (score: number) => score
);

export const selectScoreState = createFeatureSelector<AppState, number>(
  "score"
);
