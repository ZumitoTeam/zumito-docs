---
editUrl: false
next: false
prev: false
title: "CommandParameters"
---

## Classdesc

Parameters passed to a command execution.

## Properties

### args

> **args**: `Map`\<`string`, `any`\>

The arguments passed to the command.

#### Defined in

[definitions/commands/CommandParameters.ts:16](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/CommandParameters.ts#L16)

***

### client

> **client**: `Client`\<`boolean`\>

The client client instance.

#### Defined in

[definitions/commands/CommandParameters.ts:23](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/CommandParameters.ts#L23)

***

### ~~framework~~

> **framework**: [`ZumitoFramework`](/api/classes/zumitoframework/)

ZumitoFramework instance
The frameworkInstance should be obtained from `ServiceContainer.get(ZumitoFramework);`

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Defined in

[definitions/commands/CommandParameters.ts:30](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/CommandParameters.ts#L30)

***

### guildSettings?

> `optional` **guildSettings**: `any`

#### Defined in

[definitions/commands/CommandParameters.ts:31](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/CommandParameters.ts#L31)

***

### interaction?

> `optional` **interaction**: `CommandInteraction`\<`CacheType`\>

The interaction that triggered the command.

#### Defined in

[definitions/commands/CommandParameters.ts:15](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/CommandParameters.ts#L15)

***

### message?

> `optional` **message**: `Message`\<`boolean`\>

The message that triggered the command.

#### Defined in

[definitions/commands/CommandParameters.ts:14](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/CommandParameters.ts#L14)

***

### trans()

> **trans**: (`key`, `params`?) => `string`

#### Parameters

• **key**: `string`

• **params?**: `any`

#### Returns

`string`

#### Defined in

[definitions/commands/CommandParameters.ts:32](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/CommandParameters.ts#L32)
