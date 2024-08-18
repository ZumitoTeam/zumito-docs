---
editUrl: false
next: false
prev: false
title: "CommandParser"
---

## Constructors

### new CommandParser()

> **new CommandParser**(): [`CommandParser`](/api/classes/commandparser/)

#### Returns

[`CommandParser`](/api/classes/commandparser/)

## Methods

### splitCommandLine()

> `static` **splitCommandLine**(`commandLine`): `any`

From a command-line string, returns an array of parameters.

#### Parameters

• **commandLine**: `any`

#### Returns

`any`

#### Private

#### Static

#### Examples

```ts
// returns ['a', 'b', 'c']
splitCommandLine('a b c');
```

```ts
// returns ['a', 'b c']
splitCommandLine('a "b c"');
```

#### Defined in

[services/CommandParser.ts:16](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/CommandParser.ts#L16)
