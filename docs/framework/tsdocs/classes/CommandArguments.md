---
id: "CommandArguments"
title: "Class: CommandArguments"
sidebar_label: "CommandArguments"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new CommandArguments**(`args?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |

#### Defined in

[types/CommandArguments.ts:6](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/CommandArguments.ts#L6)

## Properties

### args

• **args**: `any` = `{}`

#### Defined in

[types/CommandArguments.ts:4](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/CommandArguments.ts#L4)

## Methods

### add

▸ **add**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[types/CommandArguments.ts:14](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/CommandArguments.ts#L14)

___

### get

▸ **get**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`any`

#### Defined in

[types/CommandArguments.ts:10](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/CommandArguments.ts#L10)

___

### parseFromInteraction

▸ `Static` **parseFromInteraction**(`interaction`): [`CommandArguments`](CommandArguments.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `CommandInteraction`<`CacheType`\> |

#### Returns

[`CommandArguments`](CommandArguments.md)

#### Defined in

[types/CommandArguments.ts:18](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/CommandArguments.ts#L18)
