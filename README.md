# mutation-observer-example

A simple example using the MutationObserver API.

## How does it work?

## Background

### MutationObserver

API to allow for response to changes in the DOM

[Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)

### MutationRecord

https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord

### MutationRecord: **addedNodes** property and **removedNodes** property

Read-only node lists of nodes added or removed by a mutation observer

[addedNodes](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/addedNodes)

[removedNodes](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/removedNodes)

### MutationRecord: **target** property

Read-only target of the mutation observer. 
- If the record's type is **attributes**, this is the Element whose attributes changed.
- If the record's type is **characterData**, this is the CharacterData node.
- If the record's type is **childList**, this is the Node whose children changed.

[target](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/target)

