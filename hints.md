# Hints

Only read these if you've been stuck for more than 10 minutes on a specific step.

---

**Hint 1 — What shape should the cart state be?**

Your slice state only needs to track the cart items. Each item has a `productId` and a `quantity`. You don't need to store the full product info in the cart — the product details already exist in `data.js` and you can look them up when you need them.

---

**Hint 2 — The addToCart reducer is the trickiest one**

Adding to cart isn't just a push. If the product is already in the cart, you need to increase its quantity instead of adding a duplicate. Look at how it's currently done in `App.jsx` and translate that same logic into a reducer.

---

**Hint 3 — Where do totals come from?**

The total item count and total price don't need their own state. They can be computed on the fly from the cart items array. You can do this computation inside the component that displays them, right after reading the cart items from the store.

---

**Hint 4 — Which components actually need the store?**

Not every component needs to talk to Redux. Think about which ones actually use cart data or trigger cart actions. `ProductGrid` for example just passes things through — after the refactor, it might not need cart-related props at all.

---

**Hint 5 — Keep cartOpen local**

The open/closed state of the cart panel is UI-only state. It doesn't affect other components and doesn't need to persist. Keeping it in local state is the right call. The question is which component should own it now that App isn't the prop middleman anymore.
