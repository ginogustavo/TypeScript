# Core Types

- number: 1, 5.3, -10
  (no difference between integer or floats)
- string: text
- boolean: true/false (just these 2, not truthy or falsy values)

They Key difference: JS uses "dynamic types" (resolved at runtime), TypeScript uses "static types"(set during development)

```typescript
function add(n1: number, n2: number, showResult: boolean, phrase: string) {}
```

In JS & TS, all numbers are float by default: 5 == 5.0

# Inference

TS has type inference, to understand that type variables or constants have.

- We could do the following (explicity) but it's redundant, not good practice, because TC is able to infere this. by declaration.

```typescript
const number2: number = 2.8;
```

But we could declare when not assigned a value.
Then, it's a good practice.

```typescript
let number3: number;
number3 = 20;
```

# Object Type

There are more specific versions of objects

## Nested Object and Types

```typescript
const product3: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand new!",
  },
};
```

# Tuple

Fixed length and fixed type
