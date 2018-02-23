export interface Post {
  id: string; // For Http
  userId: string; // For Http
  title: string;
  body: string;
}

export interface Mylazy {
  // define state here
}

export interface MylazyState {
  readonly mylazy: Mylazy;
}
