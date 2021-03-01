import { createAction, props } from "@ngrx/store";

export const increment = createAction("[Score] Increment Score");

export const decrement = createAction("[Score] Decrement Score");

export const reset = createAction("[Score] Reset Score");
