import { createAction } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee.model';

export const getCoffee = createAction('[Coffee] Get Coffee');

export const getCoffeeSuccess = createAction(
  '[Coffee] Get Coffee Success',
  (coffees: ReadonlyArray<Coffee>) => ({ coffees })
);
