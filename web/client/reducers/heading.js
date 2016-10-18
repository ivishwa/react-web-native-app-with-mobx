import { createAction, createReducer } from 'redux-act';
import * as Immutable from 'immutable';

export const actions = {
  change_heading: createAction('title change', (...args) => args),
  change_subtitle: createAction('subtitle change', (...args) => args)
}

export const reducer = createReducer({
  [actions.change_heading]: (state, [ title ]) => state.merge({title: title}),
  [actions.change_subtitle]: (state, [ title ]) => state.merge({subtitle: title})
}, Immutable.Map({ title: "foo" , subtitle: "bar"}) );
