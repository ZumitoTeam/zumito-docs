---
editUrl: false
next: false
prev: false
title: "ZumitoFramework"
---

## Description

The main class of the framework.

## Example

```ts
new ZumitoFramework({
    discordClientOptions: {
         intents: 3276799,
         token: 'XXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         clientId: 755XXXXXXXXXX98,
     },
     defaultPrefix: process.env.BOTPREFIX || "z-",
     mongoQueryString: mongodb://XXXXXX,
     logLevel: parseInt(process.env.LOGLEVEL || "3"),
});
```

## Constructors

### new ZumitoFramework()

> **new ZumitoFramework**(`settings`, `callback`?): [`ZumitoFramework`](/api/classes/zumitoframework/)

#### Parameters

• **settings**: [`FrameworkSettings`](/api/interfaces/frameworksettings/)

The settings to use for the framework.

• **callback?**

A callback to be called when the framework has finished initializing.

#### Returns

[`ZumitoFramework`](/api/classes/zumitoframework/)

#### Defined in

[ZumitoFramework.ts:157](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L157)

## Properties

### app

> **app**: `any`

The ExpressJS app instance.

#### Private

#### See

[https://expressjs.com/en/4x/api.html#app](https://expressjs.com/en/4x/api.html#app)

#### Defined in

[ZumitoFramework.ts:125](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L125)

***

### client

> **client**: `Client`\<`boolean`\>

The discord client instance.

#### Private

#### See

[https://discord.js.org/#/docs/main/stable/class/Client](https://discord.js.org/#/docs/main/stable/class/Client)

#### Defined in

[ZumitoFramework.ts:63](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L63)

***

### commands

> **commands**: `CommandManager`

The commands loaded in the framework.

#### Private

#### See

[Command](../../../../../api/classes/command)

#### Defined in

[ZumitoFramework.ts:85](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L85)

***

### database

> **database**: `any`

The zumito-db database schema instance.

#### Private

#### See

[https://www.npmjs.com/package/zumito-db](https://www.npmjs.com/package/zumito-db)

#### Defined in

[ZumitoFramework.ts:117](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L117)

***

### eventEmitter

> **eventEmitter**: `EventEmitter`\<`DefaultEventMap`\>

Event emitter for the framework.
All events related to the framework are emitted from here.

#### Private

#### See

[https://nodejs.org/api/events.html#events_class_eventemitter](https://nodejs.org/api/events.html#events_class_eventemitter)

#### Defined in

[ZumitoFramework.ts:142](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L142)

***

### eventManager

> **eventManager**: `EventManager`

Event manager for the framework.
All events related to the framework and discord.js are handled here.

#### Private

#### Defined in

[ZumitoFramework.ts:150](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L150)

***

### events

> **events**: `Map`\<`string`, [`FrameworkEvent`](/api/classes/frameworkevent/)\>

The events loaded in the framework.

#### Private

#### See

[FrameworkEvent](../../../../../api/classes/frameworkevent)

#### Defined in

[ZumitoFramework.ts:93](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L93)

***

### models

> **models**: [`DatabaseModel`](/api/classes/databasemodel/)[]

The database models loaded in the framework.

#### Private

#### Defined in

[ZumitoFramework.ts:109](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L109)

***

### modules

> **modules**: `ModuleManager`

Module manager instance

#### Private

#### Defined in

[ZumitoFramework.ts:77](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L77)

***

### routes

> **routes**: `any`

#### Defined in

[ZumitoFramework.ts:102](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L102)

***

### settings

> **settings**: [`FrameworkSettings`](/api/interfaces/frameworksettings/)

The settings for the framework.

#### Private

#### Defined in

[ZumitoFramework.ts:70](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L70)

***

### statusManager

> **statusManager**: `StatusManager`

The Status Manager instance.

#### Private

#### See

StatusManager

#### Defined in

[ZumitoFramework.ts:133](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L133)

***

### translations

> **translations**: [`TranslationManager`](/api/classes/translationmanager/)

The Translation Manager for the framework.

#### Private

#### See

[TranslationManager](../../../../../api/classes/translationmanager)

#### Defined in

[ZumitoFramework.ts:101](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L101)

## Methods

### ~~getGuildSettings()~~

> **getGuildSettings**(`guildId`): `Promise`\<`unknown`\>

Use GuildDataGetter service

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **guildId**: `string`

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[ZumitoFramework.ts:382](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L382)

***

### ~~memberHasPermission()~~

> **memberHasPermission**(`member`, `channel`, `permission`): `Promise`\<`any`\>

Use MemberPermissionChecker service

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **member**: `GuildMember`

• **channel**: `TextChannel`

• **permission**: `bigint`

#### Returns

`Promise`\<`any`\>

#### Defined in

[ZumitoFramework.ts:368](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L368)

***

### ~~refreshSlashCommands()~~

> **refreshSlashCommands**(): `Promise`\<`void`\>

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Returns

`Promise`\<`void`\>

#### Defined in

[ZumitoFramework.ts:390](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L390)

***

### startApiServer()

> **startApiServer**(): `void`

Initializes and starts the API server using ExpressJS.
Sets up middleware, routes, and error handling for the server.

#### Returns

`void`

#### Defined in

[ZumitoFramework.ts:235](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L235)

***

### ~~splitCommandLine()~~

> `static` **splitCommandLine**(`commandLine`): `any`

Use CommandParser service instead

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

• **commandLine**: `any`

#### Returns

`any`

#### Defined in

[ZumitoFramework.ts:359](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/ZumitoFramework.ts#L359)
