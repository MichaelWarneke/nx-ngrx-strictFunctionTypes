export enum CoreActionTypes {
  SWITCH_LAMP = '[Core] Switch Lamp',
  CHANGE_NAME = '[Core] Change Name'
}

export interface SwitchLamp {
  type: CoreActionTypes.SWITCH_LAMP;
  payload: {};
}

export interface ChangeName {
  type: CoreActionTypes.CHANGE_NAME;
  payload: string;
}

export type CoreAction = SwitchLamp | ChangeName;
