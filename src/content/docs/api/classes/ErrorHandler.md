---
editUrl: false
next: false
prev: false
title: "ErrorHandler"
---

## Constructors

### new ErrorHandler()

> **new ErrorHandler**(`framework`): [`ErrorHandler`](/api/classes/errorhandler/)

#### Parameters

• **framework**: [`ZumitoFramework`](/api/classes/zumitoframework/)

#### Returns

[`ErrorHandler`](/api/classes/errorhandler/)

#### Defined in

[services/ErrorHandler.ts:21](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/ErrorHandler.ts#L21)

## Properties

### framework

> **framework**: [`ZumitoFramework`](/api/classes/zumitoframework/)

#### Defined in

[services/ErrorHandler.ts:19](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/ErrorHandler.ts#L19)

## Methods

### handleCommandError()

> **handleCommandError**(`error`, `options`): `void`

#### Parameters

• **error**: `Error`

• **options**: `CommandErrorOptions`

#### Returns

`void`

#### Defined in

[services/ErrorHandler.ts:35](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/ErrorHandler.ts#L35)

***

### handleError()

> **handleError**(`error`, `options`): `void`

#### Parameters

• **error**: `Error`

• **options**: `BaseErrorOptions` \| `CommandErrorOptions`

#### Returns

`void`

#### Defined in

[services/ErrorHandler.ts:25](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/ErrorHandler.ts#L25)

***

### printErrorStack()

> **printErrorStack**(`error`): `void`

#### Parameters

• **error**: `Error`

#### Returns

`void`

#### Defined in

[services/ErrorHandler.ts:51](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/ErrorHandler.ts#L51)
