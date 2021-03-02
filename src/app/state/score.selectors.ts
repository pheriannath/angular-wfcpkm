import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectScore = (state: AppState) => state.score;

// export const selectScoreCount = createSelector(
//   selectScore,
//   (state: AppState) => state.score
// );
