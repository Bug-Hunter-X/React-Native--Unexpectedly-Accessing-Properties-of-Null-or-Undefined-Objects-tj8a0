# React Native: Handling Null or Undefined Object Properties

This repository demonstrates a common error in React Native applications where you attempt to access properties of an object that might be null or undefined, leading to crashes. The example focuses on data fetching and handling asynchronous operations.  The solution shows best practices for preventing these errors.

## Problem
The `bug.js` file shows the problematic code.  Attempting to access `this.state.userData.name` before `userData` is populated from the API call results in a runtime error.

## Solution
The `bugSolution.js` file illustrates how to use optional chaining and nullish coalescing to safely access properties and provide default values when dealing with potentially null or undefined values.