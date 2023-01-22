---
id: "Module"
title: "Class: Module"
sidebar_label: "Module"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Module**(`path`, `framework`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `any` |
| `framework` | `any` |

#### Defined in

[types/Module.ts:26](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L26)

## Properties

### commands

• `Protected` **commands**: `Map`<`string`, [`Command`](Command.md)\>

#### Defined in

[types/Module.ts:22](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L22)

___

### events

• `Protected` **events**: `Map`<`string`, [`FrameworkEvent`](FrameworkEvent.md)\>

#### Defined in

[types/Module.ts:23](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L23)

___

### framework

• `Protected` **framework**: [`ZumitoFramework`](ZumitoFramework.md)

#### Defined in

[types/Module.ts:21](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L21)

___

### models

• `Protected` **models**: `Map`<`string`, `any`\>

#### Defined in

[types/Module.ts:24](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L24)

___

### path

• `Protected` **path**: `string`

#### Defined in

[types/Module.ts:20](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L20)

## Methods

### getCommands

▸ **getCommands**(): `Map`<`string`, [`Command`](Command.md)\>

#### Returns

`Map`<`string`, [`Command`](Command.md)\>

#### Defined in

[types/Module.ts:159](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L159)

___

### getEvents

▸ **getEvents**(): `Map`<`string`, [`FrameworkEvent`](FrameworkEvent.md)\>

#### Returns

`Map`<`string`, [`FrameworkEvent`](FrameworkEvent.md)\>

#### Defined in

[types/Module.ts:250](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L250)

___

### getModels

▸ **getModels**(): `Map`<`string`, `any`\>

#### Returns

`Map`<`string`, `any`\>

#### Defined in

[types/Module.ts:337](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L337)

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:31](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L31)

___

### loadTranslationFile

▸ **loadTranslationFile**(`subpath`, `file`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subpath` | `string` |
| `file` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[types/Module.ts:280](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L280)

___

### onCommandChanged

▸ **onCommandChanged**(`filePath`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:118](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L118)

___

### onCommandCreated

▸ **onCommandCreated**(`filePath`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:86](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L86)

___

### onErrorLoadingCommand

▸ **onErrorLoadingCommand**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Defined in

[types/Module.ts:154](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L154)

___

### parseEventArgs

▸ **parseEventArgs**(`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `any`[] |

#### Returns

`any`

#### Defined in

[types/Module.ts:230](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L230)

___

### parseTranslation

▸ **parseTranslation**(`path`, `lang`, `json`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `lang` | `string` |
| `json` | `any` |

#### Returns

`any`

#### Defined in

[types/Module.ts:301](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L301)

___

### registerCommands

▸ **registerCommands**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:40](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L40)

___

### registerDiscordEvent

▸ **registerDiscordEvent**(`frameworkEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameworkEvent` | [`FrameworkEvent`](FrameworkEvent.md) |

#### Returns

`void`

#### Defined in

[types/Module.ts:210](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L210)

___

### registerEvents

▸ **registerEvents**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:163](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L163)

___

### registerModels

▸ **registerModels**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:311](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L311)

___

### registerTranslations

▸ **registerTranslations**(`subpath?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `subpath` | `string` | `''` |

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:254](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Module.ts#L254)
