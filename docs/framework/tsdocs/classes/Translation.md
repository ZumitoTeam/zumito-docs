---
id: "Translation"
title: "Class: Translation"
sidebar_label: "Translation"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Translation**()

#### Defined in

[types/Translation.ts:4](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Translation.ts#L4)

## Properties

### text

• **text**: `Map`<`string`, `string`\>

#### Defined in

[types/Translation.ts:2](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Translation.ts#L2)

## Methods

### get

▸ **get**(`language`, `params?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `string` |
| `params?` | `any` |

#### Returns

`string`

#### Defined in

[types/Translation.ts:6](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Translation.ts#L6)

___

### getAll

▸ **getAll**(): `Map`<`string`, `string`\>

#### Returns

`Map`<`string`, `string`\>

#### Defined in

[types/Translation.ts:29](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Translation.ts#L29)

___

### has

▸ **has**(`language`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `string` |

#### Returns

`boolean`

#### Defined in

[types/Translation.ts:25](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Translation.ts#L25)

___

### set

▸ **set**(`language`, `text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `string` |
| `text` | `string` |

#### Returns

`void`

#### Defined in

[types/Translation.ts:21](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Translation.ts#L21)

___

### setAll

▸ **setAll**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `Map`<`string`, `string`\> |

#### Returns

`void`

#### Defined in

[types/Translation.ts:33](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Translation.ts#L33)
