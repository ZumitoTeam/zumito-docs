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

[ZumitoFramework.ts:117](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L117)

## Properties

### app

• `Private` **app**: `any`

The ExpressJS app instance.

**`See`**

[https://expressjs.com/en/4x/api.html#app](https://expressjs.com/en/4x/api.html#app)

#### Defined in

[ZumitoFramework.ts:110](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L110)

___

### client

• `Private` **client**: `Client`<`boolean`\>

The discord client instance.

**`See`**

[https://discord.js.org/#/docs/main/stable/class/Client](https://discord.js.org/#/docs/main/stable/class/Client)

#### Defined in

[ZumitoFramework.ts:55](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L55)

___

### commands

• `Private` **commands**: `Map`<`string`, [`Command`](Command.md)\>

The commands loaded in the framework.

**`See`**

[Command](Command.md)

#### Defined in

[ZumitoFramework.ts:74](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L74)

___

### database

• `Private` **database**: `any`

The connection to the MongoDB database.

**`See`**

[https://mongoosejs.com/docs/api/connection.html](https://mongoosejs.com/docs/api/connection.html)

#### Defined in

[ZumitoFramework.ts:103](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L103)

___

### events

• `Private` **events**: `Map`<`string`, [`FrameworkEvent`](FrameworkEvent.md)\>

The events loaded in the framework.

**`See`**

[FrameworkEvent](FrameworkEvent.md)

#### Defined in

[ZumitoFramework.ts:81](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L81)

___

### models

• `Private` **models**: `any`

The database models loaded in the framework.

**`See`**

[https://mongoosejs.com/docs/models.html](https://mongoosejs.com/docs/models.html)

#### Defined in

[ZumitoFramework.ts:96](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L96)

___

### modules

• `Private` **modules**: `Map`<`string`, [`Module`](Module.md)\>

The modules loaded in the framework.

#### Defined in

[ZumitoFramework.ts:67](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L67)

___

### routes

• **routes**: `any`

#### Defined in

[ZumitoFramework.ts:89](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L89)

___

### settings

• `Private` **settings**: [`FrameworkSettings`](../interfaces/FrameworkSettings.md)

The settings for the framework.

#### Defined in

[ZumitoFramework.ts:61](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L61)

___

### translations

• `Private` **translations**: [`TranslationManager`](TranslationManager.md)

The Translation Manager for the framework.

**`See`**

[TranslationManager](TranslationManager.md)

#### Defined in

[ZumitoFramework.ts:88](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L88)

## Methods

### getGuildSettings

▸ **getGuildSettings**(`guildId`): `Promise`<`any`\>

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

`Promise`<`any`\>

#### Defined in

[ZumitoFramework.ts:418](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L418)

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

[ZumitoFramework.ts:146](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L146)

___

### initializeDiscordClient

▸ `Private` **initializeDiscordClient**(): `void`

Initializes the Discord client using the Discord.js library.
Logs in to the Discord API using the provided token and logs a message when the client is ready.

#### Returns

`void`

#### Defined in

[ZumitoFramework.ts:314](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L314)

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

[ZumitoFramework.ts:385](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L385)

___

### refreshSlashCommands

▸ **refreshSlashCommands**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[ZumitoFramework.ts:430](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L430)

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

[ZumitoFramework.ts:236](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L236)

___

### registerModules

▸ `Private` **registerModules**(): `Promise`<`void`\>

Register all modules in the 'modules' folder.
Scans the specified folder for module files and calls the `registerModule` method for each file.
 Also, it loads the baseModule in the framework.

#### Returns

`Promise`<`void`\>

#### Defined in

[ZumitoFramework.ts:215](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L215)

___

### startApiServer

▸ **startApiServer**(): `void`

Initializes and starts the API server using ExpressJS.
Sets up middleware, routes, and error handling for the server.

#### Returns

`void`

#### Defined in

[ZumitoFramework.ts:169](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L169)

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

[ZumitoFramework.ts:338](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/ZumitoFramework.ts#L338)
