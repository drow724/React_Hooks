# @jaegeun/use-prevent-leave

React Hook to prompt the user for confirmation before leaving the page. Useful when changes haven't been saved.

## Installation

#### yarn

`yarn add @jaegeun/use-prevent-leave`

#### npm

`npm i @jaegeun/use-prevent-leave`

## Usage

```js
import React from "react";
import usePreventLeave from "@jaegeun/use-prevent-leave";

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const saveChanges = async () => {
    enablePrevent();
    await sendToApi();
    disablePrevent();
  };
  return <button onClick={saveChanges}>Save changes</button>;
}
```

### Return

| Return value | Type   | Description                                                                                                                     |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Functions    | Object | A object containing functions `enablePrevent` and `disablePrevent`, use this functions to enable/disable the leaving prevention |
