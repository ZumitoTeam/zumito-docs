---
id: "CommandParameters"
title: "Interface: CommandParameters"
sidebar_label: "CommandParameters"
sidebar_position: 0
custom_edit_url: null
---

**`Classdesc`**

Parameters passed to a command execution.

**`Property`**

The client client instance.

**`Property`**

The message that triggered the command.

**`Property`**

The interaction that triggered the command.

**`Property`**

The arguments passed to the command.

## Properties

### args

• **args**: `Map`<`string`, `any`\>

#### Defined in

[types/CommandParameters.ts:16](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/CommandParameters.ts#L16)

___

### client

• **client**: `Client`<`boolean`\>

#### Defined in

[types/CommandParameters.ts:17](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/CommandParameters.ts#L17)

___

### framework

• **framework**: [`ZumitoFramework`](../classes/ZumitoFramework.md)

#### Defined in

[types/CommandParameters.ts:18](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/CommandParameters.ts#L18)

___

### guildSettings

• `Optional` **guildSettings**: `any`

#### Defined in

[types/CommandParameters.ts:19](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/CommandParameters.ts#L19)

___

### interaction

• `Optional` **interaction**: `CommandInteraction`<`CacheType`\>

#### Defined in

[types/CommandParameters.ts:15](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/CommandParameters.ts#L15)

___

### message

• `Optional` **message**: `Message`<`boolean`\>

#### Defined in

[types/CommandParameters.ts:14](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/CommandParameters.ts#L14)

___

### trans

• **trans**: (`key`: `string`, `params?`: `any`) => `string`

#### Type declaration

▸ (`key`, `params?`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `params?` | `any` |

##### Returns

`string`

#### Defined in

[types/CommandParameters.ts:20](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/CommandParameters.ts#L20)
