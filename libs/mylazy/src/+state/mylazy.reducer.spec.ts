import { mylazyReducer } from './mylazy.reducer';
import { mylazyInitialState } from './mylazy.init';
import { Mylazy } from './mylazy.interfaces';
import { DataLoaded } from './mylazy.actions';

describe('mylazyReducer', () => {
  it('should work', () => {
    const state: Mylazy = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = mylazyReducer(state, action);
    expect(actual).toEqual({});
  });
});
