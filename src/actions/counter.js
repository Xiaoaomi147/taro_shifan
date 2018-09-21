import { createAction } from 'redux-actions';

export const ADD = Symbol("ADD");
export const add = createAction(ADD);

export const MINUS = Symbol("MINUS");
export const minus = createAction(MINUS);
