---
editUrl: false
next: false
prev: false
title: "GuildDataGetter"
---

## Constructors

### new GuildDataGetter()

> **new GuildDataGetter**(`framework`): [`GuildDataGetter`](/api/classes/guilddatagetter/)

#### Parameters

• **framework**: [`ZumitoFramework`](/api/classes/zumitoframework/)

#### Returns

[`GuildDataGetter`](/api/classes/guilddatagetter/)

#### Defined in

[services/GuildDataGetter.ts:8](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/GuildDataGetter.ts#L8)

## Properties

### framework

> **framework**: [`ZumitoFramework`](/api/classes/zumitoframework/)

#### Defined in

[services/GuildDataGetter.ts:6](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/GuildDataGetter.ts#L6)

## Methods

### getGuildSettings()

> **getGuildSettings**(`guildId`): `Promise`\<`unknown`\>

Gets the guild settings from the database.
If the guild is not in the database, it is added.

#### Parameters

• **guildId**: `string`

#### Returns

`Promise`\<`unknown`\>

#### Async

#### Examples

```ts
// returns the guild settings
getGuildSettings('123456789012345678');
```

```ts
// returns the guild settings
getGuildSettings(guild.id);
```

```ts
// returns the guild settings
getGuildSettings(message.guild.id);
```

```ts
// returns the guild settings
getGuildSettings(interaction.guild.id);
```

```ts
// returns the guild settings
getGuildSettings(interaction.guildId);
```

#### Defined in

[services/GuildDataGetter.ts:35](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/GuildDataGetter.ts#L35)
