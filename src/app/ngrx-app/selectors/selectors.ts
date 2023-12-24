import { createFeatureSelector, createSelector } from "@ngrx/store";
 
export interface FeatureState {
  counter: number;
}
 
export interface AppState {
  feature: FeatureState;
}
 
export const selectFeature = (state: AppState) => state.feature;
 
export const selectFeatureCount = createFeatureSelector<AppState>('counter');