import { Core, CoreState } from "./core.interfaces";
import { CoreAction, CoreActionTypes } from "./core.actions";
import * as fromRouter from "@ngrx/router-store";

export function coreReducer(state: Core, action: CoreAction): Core {
  switch (action.type) {
    case CoreActionTypes.SWITCH_LAMP: {
      return { ...state, lampOn: !state.lampOn };
    }
    case CoreActionTypes.CHANGE_NAME: {
      return { ...state, name: action.payload };
    }
    default: {
      return state;
    }
  }
}

export const selectLampOn = (state: CoreState) => state.core.lampOn;
export const selectName = (state: CoreState) => state.core.name;

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from "ngrx-store-freeze";
import { MetaReducer, ActionReducerMap, ActionReducer } from "@ngrx/store";
import { RouterStateUrl } from "../router-utils";

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  core: Core;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<any, any> = {
  core: coreReducer,
  routerReducer: fromRouter.routerReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State | undefined, action: any): State {
    const type: string = action.type;
    console.log("state", state);
    console.log("action", action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = [logger /*, storeFreeze*/];
