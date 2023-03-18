---
id: "ZumitoFramework"
title: "Class: ZumitoFramework"
sidebar_label: "ZumitoFramework"
sidebar_position: 0
custom_edit_url: null
---

**`Description`**

The main class of the framework.

**`Example`**

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

### constructor

• **new ZumitoFramework**(`settings`, `callback?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | [`FrameworkSettings`](../interfaces/FrameworkSettings.md) | The settings to use for the framework. |
| `callback?` | (`framework`: `any`) => `void` | A callback to be called when the framework has finished initializing. |

#### Defined in

[ZumitoFramework.ts:117](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L117)

## Properties

### app

• `Private` **app**: `any`

The ExpressJS app instance.

**`See`**

[https://expressjs.com/en/4x/api.html#app](https://expressjs.com/en/4x/api.html#app)

#### Defined in

[ZumitoFramework.ts:110](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L110)

___

### client

• `Private` **client**: `Client`<`boolean`\>

The discord client instance.

**`See`**

[https://discord.js.org/#/docs/main/stable/class/Client](https://discord.js.org/#/docs/main/stable/class/Client)

#### Defined in

[ZumitoFramework.ts:56](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L56)

___

### commands

• `Private` **commands**: `Map`<`string`, [`Command`](Command.md)\>

The commands loaded in the framework.

**`See`**

[Command](Command.md)

#### Defined in

[ZumitoFramework.ts:75](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L75)

___

### database

• `Private` **database**: `any`

The canario database schema instance.

**`See`**

[https://www.npmjs.com/package/canario](https://www.npmjs.com/package/canario)

#### Defined in

[ZumitoFramework.ts:103](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L103)

___

### events

• `Private` **events**: `Map`<`string`, [`FrameworkEvent`](FrameworkEvent.md)\>

The events loaded in the framework.

**`See`**

[FrameworkEvent](FrameworkEvent.md)

#### Defined in

[ZumitoFramework.ts:82](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L82)

___

### models

• `Private` **models**: [`DatabaseModel`](DatabaseModel.md)[]

The database models loaded in the framework.

#### Defined in

[ZumitoFramework.ts:96](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L96)

___

### modules

• `Private` **modules**: `Map`<`string`, [`Module`](Module.md)\>

The modules loaded in the framework.

#### Defined in

[ZumitoFramework.ts:68](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L68)

___

### routes

• **routes**: `any`

#### Defined in

[ZumitoFramework.ts:90](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L90)

___

### settings

• `Private` **settings**: [`FrameworkSettings`](../interfaces/FrameworkSettings.md)

The settings for the framework.

#### Defined in

[ZumitoFramework.ts:62](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L62)

___

### translations

• `Private` **translations**: [`TranslationManager`](TranslationManager.md)

The Translation Manager for the framework.

**`See`**

[TranslationManager](TranslationManager.md)

#### Defined in

[ZumitoFramework.ts:89](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L89)

## Methods

### getGuildSettings

▸ **getGuildSettings**(`guildId`): `Promise`<`unknown`\>

Gets the guild settings from the database.
If the guild is not in the database, it is added.

**`Async`**

**`Example`**

```ts
// returns the guild settings
getGuildSettings('123456789012345678');
```

**`Example`**

```ts
// returns the guild settings
getGuildSettings(guild.id);
```

**`Example`**

```ts
// returns the guild settings
getGuildSettings(message.guild.id);
```

**`Example`**

```ts
// returns the guild settings
getGuildSettings(interaction.guild.id);
```

**`Example`**

```ts
// returns the guild settings
getGuildSettings(interaction.guildId);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildId` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[ZumitoFramework.ts:442](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L442)

___

### initialize

▸ `Private` **initialize**(): `Promise`<`void`\>

Initializes the framework.
Connects to the MongoDB database, starts the Discord client, and runs API server.
It also loads the modules from the project's modules folder.

**`Async`**

#### Returns

`Promise`<`void`\>

#### Defined in

[ZumitoFramework.ts:146](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L146)

___

### initializeDatabase

▸ `Private` **initializeDatabase**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[ZumitoFramework.ts:155](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L155)

___

### initializeDiscordClient

▸ `Private` **initializeDiscordClient**(): `void`

Initializes the Discord client using the Discord.js library.
Logs in to the Discord API using the provided token and logs a message when the client is ready.

#### Returns

`void`

#### Defined in

[ZumitoFramework.ts:338](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L338)

___

### memberHasPermission

▸ **memberHasPermission**(`member`, `channel`, `permission`): `Promise`<`boolean`\>

Checks if a member has a permission in a channel.

**`Example`**

```ts
// returns true if the member has the permission
memberHasPermission(member, channel, Permissions.FLAGS.MANAGE_MESSAGES);
```

**`Example`**

```ts
// returns true if the member has the permission
memberHasPermission(member, channel, Permissions.FLAGS.MANAGE_MESSAGES | Permissions.FLAGS.MANAGE_CHANNELS);
```

**`Example`**

```ts

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `member` | `GuildMember` |
| `channel` | `TextChannel` |
| `permission` | `bigint` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[ZumitoFramework.ts:409](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L409)

___

### refreshSlashCommands

▸ **refreshSlashCommands**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[ZumitoFramework.ts:462](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L462)

___

### registerModule

▸ `Private` **registerModule**(`modulesFolder`, `moduleName`, `module?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modulesFolder` | `any` |
| `moduleName` | `any` |
| `module?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[ZumitoFramework.ts:267](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L267)

___

### registerModules

▸ `Private` **registerModules**(): `Promise`<`void`\>

Register all modules in the 'modules' folder.
Scans the specified folder for module files and calls the `registerModule` method for each file.
 Also, it loads the baseModule in the framework.

#### Returns

`Promise`<`void`\>

#### Defined in

[ZumitoFramework.ts:229](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L229)

___

### startApiServer

▸ **startApiServer**(): `void`

Initializes and starts the API server using ExpressJS.
Sets up middleware, routes, and error handling for the server.

#### Returns

`void`

#### Defined in

[ZumitoFramework.ts:183](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L183)

___

### splitCommandLine

▸ `Static` `Private` **splitCommandLine**(`commandLine`): `any`

From a command-line string, returns an array of parameters.

**`Static`**

**`Example`**

```ts
// returns ['a', 'b', 'c']
splitCommandLine('a b c');
```

**`Example`**

```ts
// returns ['a', 'b c']
splitCommandLine('a "b c"');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandLine` | `any` |

#### Returns

`any`

#### Defined in

[ZumitoFramework.ts:362](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/ZumitoFramework.ts#L362)
