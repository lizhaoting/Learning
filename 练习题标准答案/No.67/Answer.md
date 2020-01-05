> 1
```javascript
Error Expected 2 arguments, but got 1.

Error Expected 2 arguments, but got 3.

'Bob Adams'

'Will Adams'
```
> 2
```typescript
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
```