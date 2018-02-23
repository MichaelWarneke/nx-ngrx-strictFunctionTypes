import { Post } from "./mylazy.interfaces";

export enum MylazyActionTypes {
  LOAD_DATA = "[Mylazy] Load Data",
  DATA_LOADED = "[Mylazy] Data Loaded"
}

export interface LoadData {
  type: MylazyActionTypes.LOAD_DATA;
  payload: {};
}

export interface DataLoaded {
  type: MylazyActionTypes.DATA_LOADED;
  payload: Post[];
}

export type MylazyAction = LoadData | DataLoaded;
