import { Coffee } from './coffee';
import { createFeatureSelector } from "@ngrx/store";

export const selectCoffees = createFeatureSelector<Coffee[]>('mycoffees');