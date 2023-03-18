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

[types/Module.ts:24](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L24)

## Properties

### commands

• `Protected` **commands**: `Map`<`string`, [`Command`](Command.md)\>

#### Defined in

[types/Module.ts:20](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L20)

___

### events

• `Protected` **events**: `Map`<`string`, [`FrameworkEvent`](FrameworkEvent.md)\>

#### Defined in

[types/Module.ts:21](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L21)

___

### framework

• `Protected` **framework**: [`ZumitoFramework`](ZumitoFramework.md)

#### Defined in

[types/Module.ts:19](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L19)

___

### models

• `Protected` **models**: [`DatabaseModel`](DatabaseModel.md)[] = `[]`

#### Defined in

[types/Module.ts:22](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L22)

___

### path

• `Protected` **path**: `string`

#### Defined in

[types/Module.ts:18](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L18)

## Methods

### getCommands

▸ **getCommands**(): `Map`<`string`, [`Command`](Command.md)\>

#### Returns

`Map`<`string`, [`Command`](Command.md)\>

#### Defined in

[types/Module.ts:155](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L155)

___

### getEvents

▸ **getEvents**(): `Map`<`string`, [`FrameworkEvent`](FrameworkEvent.md)\>

#### Returns

`Map`<`string`, [`FrameworkEvent`](FrameworkEvent.md)\>

#### Defined in

[types/Module.ts:246](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L246)

___

### getModels

▸ **getModels**(): [`DatabaseModel`](DatabaseModel.md)[]

#### Returns

[`DatabaseModel`](DatabaseModel.md)[]

#### Defined in

[types/Module.ts:330](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L330)

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:29](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L29)

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

[types/Module.ts:276](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L276)

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

[types/Module.ts:114](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L114)

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

[types/Module.ts:82](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L82)

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

[types/Module.ts:150](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L150)

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

[types/Module.ts:226](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L226)

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

[types/Module.ts:297](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L297)

___

### registerCommands

▸ **registerCommands**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:36](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L36)

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

[types/Module.ts:206](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L206)

___

### registerEvents

▸ **registerEvents**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:159](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L159)

___

### registerModels

▸ **registerModels**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[types/Module.ts:307](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L307)

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

[types/Module.ts:250](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/Module.ts#L250)
