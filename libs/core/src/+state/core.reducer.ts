import { Core } from './core.interfaces';
import { CoreAction } from './core.actions';

export function coreReducer(state: Core, action: CoreAction): Core {
  switch (action.type) {
    case 'DATA_LOADED': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
