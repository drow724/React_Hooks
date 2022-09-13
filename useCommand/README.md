# @jaegeun/use-command

React Hook for command Action

## Installation

#### yarn

`yarn add @jaegeun/use-command`

#### npm

`npm i @jaegeun/use-command`

## Usage

```js
import React from "react";
import useCommand from "@jaegeun/use-command";

function App() {
  const doOnEvery = () => console.log("This is Everywhere!");
  const arrowUp = () => console.log("I'm ArrayUp");
  const arrowDown = () => console.log("I'm ArrayDown");
  const arrowLeft = () => console.log("I'm ArrayLeft");
  const arrowRight = () => console.log("I'm ArrayRight");
  const enter = () => console.log("I'm Entered");
  const escape = () => console.log("I'm Escape");
  const {elemnet, onChange} = useCommand(doOnEvery,arrowUp,arrowDown,arrowLeft,arrowRight,enter,escape);
  return <input ref={element} onKeyDown={onChange}>Hello Nooks</h1>;
}
```

### Arguments

| Argument  | Type     | Description                                       | Required |
| --------  | -------- | ------------------------------------------------- | -------- |
| doOnEvery | function | Function to be called when the element is hovered | no       |
| arrowUp   | function | Function to be called when the element is hovered | no       |
| arrowDown | function | Function to be called when the element is hovered | no       |
| arrowLeft | function | Function to be called when the element is hovered | no       |
| arrowRight| function | Function to be called when the element is hovered | no       |
| enter     | function | Function to be called when the element is hovered | no       |
| escape    | function | Function to be called when the element is hovered | no       |

### Return

| Return value | Type      | Description                                                         | Default value |
| ------------ | --------- | ---------------------------------------------------------------     | ------------- |
| ref          | React Ref | A React Ref listening to the onKeyDown event, add it to any element | null          |
| handler      | function  | onKeyDown Event Handler                                             | null          |
