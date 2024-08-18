---
editUrl: false
next: false
prev: false
title: "TranslationManager"
---

## Constructors

### new TranslationManager()

> **new TranslationManager**(): [`TranslationManager`](/api/classes/translationmanager/)

#### Returns

[`TranslationManager`](/api/classes/translationmanager/)

## Methods

### get()

> **get**(`key`, `language`?, `params`?): `string`

#### Parameters

• **key**: `string`

• **language?**: `string`

• **params?**: `unknown`

#### Returns

`string`

#### Defined in

[services/TranslationManager.ts:13](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L13)

***

### getAll()

> **getAll**(): `Map`\<`string`, [`Translation`](/api/classes/translation/)\>

#### Returns

`Map`\<`string`, [`Translation`](/api/classes/translation/)\>

#### Defined in

[services/TranslationManager.ts:33](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L33)

***

### getDefaultLanguage()

> **getDefaultLanguage**(): `string`

#### Returns

`string`

#### Defined in

[services/TranslationManager.ts:41](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L41)

***

### getLanguages()

> **getLanguages**(): `string`[]

#### Returns

`string`[]

#### Defined in

[services/TranslationManager.ts:49](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L49)

***

### has()

> **has**(`key`): `boolean`

#### Parameters

• **key**: `string`

#### Returns

`boolean`

#### Defined in

[services/TranslationManager.ts:29](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L29)

***

### importTranslationsJson()

> **importTranslationsJson**(`path`, `lang`, `json`): `void`

#### Parameters

• **path**: `string`

• **lang**: `string`

• **json**: `string` \| `object`

#### Returns

`void`

#### Defined in

[services/TranslationManager.ts:53](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L53)

***

### loadTranslationFile()

> **loadTranslationFile**(`filePath`): `Promise`\<`object`\>

Returns content of translation json file

#### Parameters

• **filePath**: `string`

Absolute path to translations file

#### Returns

`Promise`\<`object`\>

#### Async

#### Defined in

[services/TranslationManager.ts:70](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L70)

***

### registerTranslationsFromFolder()

> **registerTranslationsFromFolder**(`folderPath`, `baseKey`?, `watch`?): `Promise`\<`void`\>

load translation files from folder and subfolders

#### Parameters

• **folderPath**: `string`

Absolute path to translations files folder

• **baseKey?**: `string` = `''`

(Optional) the translation key to start from. All translations loaded will be children translations of that key

• **watch?**: `boolean` = `false`

Watch folder for file modifications

#### Returns

`Promise`\<`void`\>

#### Async

#### Defined in

[services/TranslationManager.ts:84](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L84)

***

### set()

> **set**(`key`, `language`, `text`): `void`

#### Parameters

• **key**: `string`

• **language**: `string`

• **text**: `string`

#### Returns

`void`

#### Defined in

[services/TranslationManager.ts:21](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L21)

***

### setAll()

> **setAll**(`translations`): `void`

#### Parameters

• **translations**: `Map`\<`string`, [`Translation`](/api/classes/translation/)\>

#### Returns

`void`

#### Defined in

[services/TranslationManager.ts:37](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L37)

***

### setDefaultLanguage()

> **setDefaultLanguage**(`language`): `void`

#### Parameters

• **language**: `string`

#### Returns

`void`

#### Defined in

[services/TranslationManager.ts:45](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L45)

***

### watchTranslationFolder()

> **watchTranslationFolder**(`folderPath`, `baseKey`): `void`

#### Parameters

• **folderPath**: `string`

• **baseKey**: `string`

#### Returns

`void`

#### Defined in

[services/TranslationManager.ts:108](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TranslationManager.ts#L108)
