---
editUrl: false
next: false
prev: false
title: "Command"
---

## Name

Command

## Description

Base class for all commands

## See

[https://docs.zumito.ga/docs/custom/create-command](https://docs.zumito.ga/docs/custom/create-command)

## Constructors

### new Command()

> **new Command**(): [`Command`](/api/classes/command/)

#### Returns

[`Command`](/api/classes/command/)

## Properties

### adminOnly

> **adminOnly**: `boolean` = `false`

#### Name

adminOnly

#### Description

Whether the command should only be available to the guild admins.

#### Default

```ts
false
```

#### Example

```ts
export class PingCommand extends Command {
 adminOnly = true;
}
```

#### Defined in

[definitions/commands/Command.ts:119](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L119)

***

### aliases

> **aliases**: `string`[] = `[]`

#### Name

aliases

#### Description

Array of strings of each alias the command has. This is used to execute the command with an alias.

#### Default

```ts
[]
```

#### Example

```ts
export class PingCommand extends Command {
 aliases = ['pong'];
}
```

#### Defined in

[definitions/commands/Command.ts:51](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L51)

***

### args

> **args**: [`CommandArgDefinition`](/api/interfaces/commandargdefinition/)[] = `[]`

#### Name

args

#### Description

Array of [CommandArgDefinition](../../../../../api/interfaces/commandargdefinition) of each argument the command has.

#### Default

```ts
[]
```

#### Example

```ts
export class PingCommand extends Command {
 args = [
     {
       name: 'number',
       type: 'number',
       required: true,
    },
 ];
}
```

#### See

[CommandArgDefinition](../../../../../api/interfaces/commandargdefinition)

#### Defined in

[definitions/commands/Command.ts:179](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L179)

***

### botPermissions

> **botPermissions**: `string`[] = `[]`

#### Name

botPermissions

#### Description

Array of [https://discord.js.org/#/docs/main/stable/class/Permissions](https://discord.js.org/#/docs/main/stable/class/Permissions) of each permission the bot needs to execute the command.

#### Default

```ts
[]
```

#### Example

```ts
export class BanCommand extends Command {
 botPermissions = [Permissions.FLAGS.BAN_MEMBERS];
}
```

#### See

[https://discord.js.org/#/docs/main/stable/class/Permissions](https://discord.js.org/#/docs/main/stable/class/Permissions)

#### Defined in

[definitions/commands/Command.ts:93](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L93)

***

### categories

> **categories**: `string`[] = `[]`

#### Name

categories

#### Description

Array of strings of each category the command belongs to. This is used to group commands together in the help command.
The framework will load the translations for each category from key `global.category.${category}`, so its recommended to use camelCase since this is the category key and not the category name.

#### Default

```ts
[]
```

#### Example

```ts
export class PingCommand extends Command {
 categories = ['utility', 'info'];
}
```

#### Defined in

[definitions/commands/Command.ts:38](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L38)

***

### cooldown

> **cooldown**: `number` = `0`

#### Name

cooldown

#### Description

The cooldown in seconds for the command. This is used to prevent spamming the command or for command with high processing time.

#### Default

```ts
0
```

#### Example

```ts
export class PingCommand extends Command {
 cooldown = 5;
}
```

#### Defined in

[definitions/commands/Command.ts:145](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L145)

***

### dm

> **dm**: `boolean` = `false`

#### Name

dm

#### Description

Whether the command should be available in dms.

#### Default

```ts
false
```

#### Example

```ts
export class PingCommand extends Command {
 dm = true;
}
```

#### Defined in

[definitions/commands/Command.ts:159](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L159)

***

### examples

> **examples**: `string`[] = `[]`

#### Name

examples

#### Description

Array of strings of each example of how to use the command. This is used to show examples of how to use the command in the help command.
Do not include the prefix in the example.

#### Default

```ts
[]
```

#### Example

```ts
export class PingCommand extends Command {
 examples = ['ping', 'ping 100'];
}
```

#### Defined in

[definitions/commands/Command.ts:65](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L65)

***

### hidden

> **hidden**: `boolean` = `false`

#### Name

hidden

#### Description

Whether the command should be hidden from the help command.

#### Default

```ts
false
```

#### Example

```ts
export class PingCommand extends Command {
 hidden = true;
}
```

#### Defined in

[definitions/commands/Command.ts:106](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L106)

***

### name

> **name**: `string`

#### Name

name

#### Description

The name of the command. This is the name that will be used to execute the command. The framework will automatically set this to the name of the class in lowercase.

#### Default

```ts
this.constructor.name.toLowerCase()
```

#### Example

```ts
export class PingCommand extends Command {
 name = 'ping';
}
```

#### Defined in

[definitions/commands/Command.ts:24](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L24)

***

### nsfw

> **nsfw**: `boolean` = `false`

#### Name

nsfw

#### Description

Whether the command should only be available in nsfw channels.

#### Default

```ts
false
```

#### Example

```ts
export class PingCommand extends Command {
  nsfw = true;
}
```

#### Defined in

[definitions/commands/Command.ts:132](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L132)

***

### slashCommand

> **slashCommand**: `boolean` = `false`

#### Defined in

[definitions/commands/Command.ts:146](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L146)

***

### type

> **type**: `string` = `CommandType.prefix`

#### Name

type

#### Description

The type of the command. This is used to determine how the command should be executed.

#### Default

```ts
CommandType.prefix
```

#### Examples

```ts
export class PingCommand extends Command {
 type = CommandType.slash;
}
```

```ts
export class PingCommand extends Command {
 type = CommandType.any;
}
```

```ts
export class PingCommand extends Command {
 type = CommandType.separated;
}
```

#### See

[CommandType](../../../../../api/variables/commandtype)

#### Defined in

[definitions/commands/Command.ts:205](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L205)

***

### userPermissions

> **userPermissions**: `bigint`[] = `[]`

#### Name

userPermissions

#### Description

Array of [https://discord.js.org/#/docs/main/stable/class/Permissions](https://discord.js.org/#/docs/main/stable/class/Permissions) of each permission the user needs to execute the command.

#### Default

```ts
[]
```

#### Example

```ts
export class ClearCommand extends Command {
 userPermissions = [Permissions.FLAGS.MANAGE_MESSAGES];
}
```

#### See

[https://discord.js.org/#/docs/main/stable/class/Permissions](https://discord.js.org/#/docs/main/stable/class/Permissions)

#### Defined in

[definitions/commands/Command.ts:79](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L79)

## Methods

### execute()

> `abstract` **execute**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: [`CommandParameters`](/api/interfaces/commandparameters/)

#### Returns

`void`

#### Name

execute

#### Description

The function that is executed when the command is called.

#### Defined in

[definitions/commands/Command.ts:218](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L218)

***

### executePrefixCommand()

> **executePrefixCommand**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: [`CommandParameters`](/api/interfaces/commandparameters/)

#### Returns

`void`

#### Defined in

[definitions/commands/Command.ts:226](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L226)

***

### executeSlashCommand()

> **executeSlashCommand**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: [`CommandParameters`](/api/interfaces/commandparameters/)

#### Returns

`void`

#### Defined in

[definitions/commands/Command.ts:237](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L237)

***

### selectMenu()

> `abstract` **selectMenu**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: [`SelectMenuParameters`](/api/interfaces/selectmenuparameters/)

#### Returns

`void`

#### Defined in

[definitions/commands/Command.ts:248](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/Command.ts#L248)
