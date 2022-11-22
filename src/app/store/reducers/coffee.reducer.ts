import { createReducer, on } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee.model';
import { getCoffee, getCoffeeSuccess } from '../actions/coffee.action';

export interface CoffeState {
  coffees: ReadonlyArray<Coffee>;
}

const initialState: ReadonlyArray<Coffee> = [];

export const coffeeReducer = createReducer(
  initialState,
  on(getCoffeeSuccess, (state, { coffees }) => [...coffees])
);
