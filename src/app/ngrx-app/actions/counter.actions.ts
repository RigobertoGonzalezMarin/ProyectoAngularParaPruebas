import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Login Page] login', props<{u: string}>());
export const decrement = createAction('[Counter component] Decrement');
export const reset = createAction('[Counter Component] Reset');