export interface Core {
  // define state here
  lampOn: boolean;
  name: string;
}

export interface CoreState {
  readonly core: Core;
}
