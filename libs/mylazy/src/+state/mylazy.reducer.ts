import { MylazyAction, MylazyActionTypes } from "./mylazy.actions";

import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Post } from "./mylazy.interfaces";
import { createFeatureSelector } from "@ngrx/store";

// Entity adapter
export const postAdapter = createEntityAdapter<Post>({
  selectId: (post: Post) => post.id
});
export interface State extends EntityState<Post> {}

export const initialState: State = postAdapter.getInitialState();

export function mylazyReducer(
  state: State = initialState,
  action: MylazyAction
): State {
  switch (action.type) {
    case MylazyActionTypes.DATA_LOADED: {
      return postAdapter.addAll(action.payload, state);
    }
    default: {
      return state;
    }
  }
}

// Create the default selectors
export const getPostState = createFeatureSelector<State>("posts");
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = postAdapter.getSelectors(getPostState);
