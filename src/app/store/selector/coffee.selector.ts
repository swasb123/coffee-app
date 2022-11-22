import { createSelector } from "@ngrx/store";
import { Coffee } from "src/app/models/coffee.model";
import { CoffeState } from "../reducers/coffee.reducer";


export const coffeeSelector = createSelector(
    (state:CoffeState) => state.coffees,
    (coffees: ReadonlyArray<Coffee>) => coffees
);