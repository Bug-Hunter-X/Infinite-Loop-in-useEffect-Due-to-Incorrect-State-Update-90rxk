# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook where an incorrect state update leads to an infinite loop. The `useEffect` hook attempts to update state directly without using a functional update, causing the component to re-render indefinitely.

## Bug

The `bug.js` file contains the buggy code. The `useEffect` hook attempts to update the state directly using `setState(prevState => prevState + 1)`. This causes an infinite re-render loop because each update triggers another update.

## Solution

The `bugSolution.js` file shows the corrected code. The solution uses a functional update (`setState(prevState => ({ ...prevState, count: prevState.count + 1 }))`) to ensure that the `useEffect` hook does not cause an infinite loop.