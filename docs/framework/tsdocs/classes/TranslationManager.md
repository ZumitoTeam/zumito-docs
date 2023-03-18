---
id: "TranslationManager"
title: "Class: TranslationManager"
sidebar_label: "TranslationManager"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new TranslationManager**()

#### Defined in

[TranslationManager.ts:8](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L8)

## Properties

### defaultLanguage

• `Private` **defaultLanguage**: `string` = `'en'`

#### Defined in

[TranslationManager.ts:5](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L5)

___

### languages

• `Private` **languages**: `string`[] = `[]`

#### Defined in

[TranslationManager.ts:6](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L6)

___

### translations

• `Private` **translations**: `Map`<`string`, [`Translation`](Translation.md)\>

#### Defined in

[TranslationManager.ts:4](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L4)

## Methods

### get

▸ **get**(`key`, `language?`, `params?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `language?` | `string` |
| `params?` | `any` |

#### Returns

`string`

#### Defined in

[TranslationManager.ts:10](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L10)

___

### getAll

▸ **getAll**(): `Map`<`string`, [`Translation`](Translation.md)\>

#### Returns

`Map`<`string`, [`Translation`](Translation.md)\>

#### Defined in

[TranslationManager.ts:30](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L30)

___

### getDefaultLanguage

▸ **getDefaultLanguage**(): `string`

#### Returns

`string`

#### Defined in

[TranslationManager.ts:38](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L38)

___

### getLanguages

▸ **getLanguages**(): `string`[]

#### Returns

`string`[]

#### Defined in

[TranslationManager.ts:46](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L46)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[TranslationManager.ts:26](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L26)

___

### set

▸ **set**(`key`, `language`, `text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `language` | `string` |
| `text` | `string` |

#### Returns

`void`

#### Defined in

[TranslationManager.ts:18](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L18)

___

### setAll

▸ **setAll**(`translations`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `translations` | `Map`<`string`, [`Translation`](Translation.md)\> |

#### Returns

`void`

#### Defined in

[TranslationManager.ts:34](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L34)

___

### setDefaultLanguage

▸ **setDefaultLanguage**(`language`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `string` |

#### Returns

`void`

#### Defined in

[TranslationManager.ts:42](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/TranslationManager.ts#L42)
