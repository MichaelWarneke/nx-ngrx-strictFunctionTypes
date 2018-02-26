# NgrxBasic

This project was created with Nrwl Nx 0.7.4 using Angular CLI 1.6.5

## What is it for

Since Typescript 2.6 there is the option for strict function types --strictFunctionTypes.
This option will be included when using "strict": true in the tsconfig.json.

The strict checking might become standard for future Angular / CLI versions.

When compiling a project with ngrx included these checks will cause a lot of problems in regards to type checking.

With this project I want to show the manual changes to be made to the ngrx implemention to get it compiled.

## What to be changed

Basically, until the Router Store is fixed (current version 5.0.1) there need to be only one adjustment when combining the reducers.
In this example app it is happening in the core.reducer.ts of the core lib.

export const reducers: ActionReducerMap<any, any> = {
core: coreReducer,
router: fromRouter.routerReducer
};

ActionReducerMap with types <any, any> is the key.
It will break with the router store version 5.0.1 if the type is anything else.

It seems the problem is in the router store where the reducer function needs to have the store as Store | undefined.
There is already a fix done by Brandon and can be found on the ngrx/platform repo branch strict-example. https://github.com/ngrx/platform/tree/strict-example

## When do you need it

When you want to code with strict type checking and use the official releases of ngrx until the bug is fixed.
