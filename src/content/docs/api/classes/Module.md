---
editUrl: false
next: false
prev: false
title: "Module"
---

## Constructors

### new Module()

> **new Module**(`path`, `parameters`?): [`Module`](/api/classes/module/)

#### Parameters

• **path**: `any`

• **parameters?**: `ModuleParameters`

#### Returns

[`Module`](/api/classes/module/)

#### Defined in

[definitions/Module.ts:28](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L28)

## Methods

### getCommands()

> **getCommands**(): `Map`\<`string`, [`Command`](/api/classes/command/)\>

#### Returns

`Map`\<`string`, [`Command`](/api/classes/command/)\>

#### Defined in

[definitions/Module.ts:60](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L60)

***

### getEvents()

> **getEvents**(): `Map`\<`string`, [`FrameworkEvent`](/api/classes/frameworkevent/)\>

#### Returns

`Map`\<`string`, [`FrameworkEvent`](/api/classes/frameworkevent/)\>

#### Defined in

[definitions/Module.ts:132](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L132)

***

### getModels()

> **getModels**(): [`DatabaseModel`](/api/classes/databasemodel/)[]

#### Returns

[`DatabaseModel`](/api/classes/databasemodel/)[]

#### Defined in

[definitions/Module.ts:169](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L169)

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[definitions/Module.ts:36](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L36)

***

### parseEventArgs()

> **parseEventArgs**(`args`): `any`

#### Parameters

• **args**: `any`[]

#### Returns

`any`

#### Defined in

[definitions/Module.ts:111](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L111)

***

### registerCommands()

> **registerCommands**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[definitions/Module.ts:43](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L43)

***

### registerEvent()

> **registerEvent**(`frameworkEvent`, `emitterName`): `void`

#### Parameters

• **frameworkEvent**: [`FrameworkEvent`](/api/classes/frameworkevent/)

• **emitterName**: `string`

#### Returns

`void`

#### Defined in

[definitions/Module.ts:98](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L98)

***

### registerEvents()

> **registerEvents**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[definitions/Module.ts:64](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L64)

***

### registerEventsFolder()

> **registerEventsFolder**(`folder`): `Promise`\<`void`\>

#### Parameters

• **folder**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[definitions/Module.ts:76](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L76)

***

### registerModels()

> **registerModels**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[definitions/Module.ts:145](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L145)

***

### registerTranslations()

> **registerTranslations**(`subpath`): `Promise`\<`void`\>

#### Parameters

• **subpath**: `string` = `''`

#### Returns

`Promise`\<`void`\>

#### Defined in

[definitions/Module.ts:136](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/Module.ts#L136)
