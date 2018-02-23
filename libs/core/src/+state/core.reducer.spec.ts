import { coreReducer } from './core.reducer';
import { coreInitialState } from './core.init';
import { Core } from './core.interfaces';
import { DataLoaded } from './core.actions';

describe('coreReducer', () => {
  it('should work', () => {
    const state: Core = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = coreReducer(state, action);
    expect(actual).toEqual({});
  });
});
