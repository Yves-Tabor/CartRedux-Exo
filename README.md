# Redux Challenge 2 — Shopping Cart

This is a working store page with a shopping cart. You can add products, adjust quantities, and remove items. Everything works.

The problem: all the cart state lives in `App.jsx` using `useState`, and it's passed through props to every component that needs it. Your job is to move the cart state into a Redux store.

## Setup

```
npm install
npm run dev
```

## What you need to do

1. Create a Redux store and a `cartSlice` that manages the cart items array.
2. Wrap the app with the Redux Provider.
3. Move all cart logic (add, remove, update quantity) into the slice as reducers.
4. Update every component so it reads cart data from the store and dispatches actions directly instead of receiving props.
5. The cart item count in the header and the total price in the cart panel should be derived from the store — not passed as props.
6. The `cartOpen` state (whether the cart panel is visible) does NOT need to be in Redux. It's fine as local state. Use your judgment on where it should live.

When you're done, the app should behave exactly the same — but `App.jsx` should no longer be the middleman for cart data.

## Rules

- Don't touch the CSS.
- Don't change how the UI looks or behaves.
- No AI tools. Redux Toolkit docs are fair game: https://redux-toolkit.js.org
- If you're stuck, check `hints.md` — but try for at least 10 minutes first.

## Time

45 minutes.
