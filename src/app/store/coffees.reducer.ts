import { Coffee } from './coffee';
import { createReducer, on } from "@ngrx/store";
import { CoffeesFetchAPISuccess } from './coffees.action';

export const initialState: ReadonlyArray<Coffee> = [];

export const coffeeReducer = createReducer(
    initialState,
    on(CoffeesFetchAPISuccess, (state, { allCoffees }) => {
        return allCoffees;
    })

);