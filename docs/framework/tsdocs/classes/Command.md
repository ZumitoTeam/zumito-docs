---
id: "Command"
title: "Class: Command"
sidebar_label: "Command"
sidebar_position: 0
custom_edit_url: null
---

**`Name`**

Command

**`Description`**

Base class for all commands

**`See`**

[https://docs.zumito.ga/docs/custom/create-command](https://docs.zumito.ga/docs/custom/create-command)

## Constructors

### constructor

• **new Command**()

## Properties

### adminOnly

• **adminOnly**: `boolean` = `false`

**`Name`**

adminOnly

**`Description`**

Whether the command should only be available to the guild admins.

**`Default`**

false

**`Example`**

```ts
export class PingCommand extends Command {
 adminOnly = true;
}
```

#### Defined in

[types/Command.ts:119](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L119)

___

### aliases

• **aliases**: `string`[] = `[]`

**`Name`**

aliases

**`Description`**

Array of strings of each alias the command has. This is used to execute the command with an alias.

**`Default`**

[]

**`Example`**

```ts
export class PingCommand extends Command {
 aliases = ['pong'];
}
```

#### Defined in

[types/Command.ts:51](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L51)

___

### args

• **args**: [`CommandArgDefinition`](../interfaces/CommandArgDefinition.md)[] = `[]`

**`Name`**

args

**`Description`**

Array of [CommandArgDefinition](../interfaces/CommandArgDefinition.md) of each argument the command has.

**`Default`**

[]

**`Example`**

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

**`See`**

[CommandArgDefinition](../interfaces/CommandArgDefinition.md)

#### Defined in

[types/Command.ts:179](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L179)

___

### botPermissions

• **botPermissions**: `string`[] = `[]`

**`Name`**

botPermissions

**`Description`**

Array of [https://discord.js.org/#/docs/main/stable/class/Permissions](https://discord.js.org/#/docs/main/stable/class/Permissions) of each permission the bot needs to execute the command.

**`Default`**

[]

**`Example`**

```ts
export class BanCommand extends Command {
 botPermissions = [Permissions.FLAGS.BAN_MEMBERS];
}
```

**`See`**

[https://discord.js.org/#/docs/main/stable/class/Permissions](https://discord.js.org/#/docs/main/stable/class/Permissions)

#### Defined in

[types/Command.ts:93](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L93)

___

### categories

• **categories**: `string`[] = `[]`

**`Name`**

categories

**`Description`**

Array of strings of each category the command belongs to. This is used to group commands together in the help command.
The framework will load the translations for each category from key `global.category.${category}`, so its recommended to use camelCase since this is the category key and not the category name.

**`Default`**

[]

**`Example`**

```ts
export class PingCommand extends Command {
 categories = ['utility', 'info'];
}
```

#### Defined in

[types/Command.ts:38](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L38)

___

### cooldown

• **cooldown**: `number` = `0`

**`Name`**

cooldown

**`Description`**

The cooldown in seconds for the command. This is used to prevent spamming the command or for command with high processing time.

**`Default`**

0

**`Example`**

```ts
export class PingCommand extends Command {
 cooldown = 5;
}
```

#### Defined in

[types/Command.ts:145](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L145)

___

### dm

• **dm**: `boolean` = `false`

**`Name`**

dm

**`Description`**

Whether the command should be available in dms.

**`Default`**

false

**`Example`**

```ts
export class PingCommand extends Command {
 dm = true;
}
```

#### Defined in

[types/Command.ts:159](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L159)

___

### examples

• **examples**: `string`[] = `[]`

**`Name`**

examples

**`Description`**

Array of strings of each example of how to use the command. This is used to show examples of how to use the command in the help command.
Do not include the prefix in the example.

**`Default`**

[]

**`Example`**

```ts
export class PingCommand extends Command {
 examples = ['ping', 'ping 100'];
}
```

#### Defined in

[types/Command.ts:65](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L65)

___

### hidden

• **hidden**: `boolean` = `false`

**`Name`**

hidden

**`Description`**

Whether the command should be hidden from the help command.

**`Default`**

false

**`Example`**

```ts
export class PingCommand extends Command {
 hidden = true;
}
```

#### Defined in

[types/Command.ts:106](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L106)

___

### name

• **name**: `string`

**`Name`**

name

**`Description`**

The name of the command. This is the name that will be used to execute the command. The framework will automatically set this to the name of the class in lowercase.

**`Default`**

this.constructor.name.toLowerCase()

**`Example`**

```ts
export class PingCommand extends Command {
 name = 'ping';
}
```

#### Defined in

[types/Command.ts:24](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L24)

___

### nsfw

• **nsfw**: `boolean` = `false`

**`Name`**

nsfw

**`Description`**

Whether the command should only be available in nsfw channels.

**`Default`**

false

**`Example`**

```ts
export class PingCommand extends Command {
  nsfw = true;
}
```

#### Defined in

[types/Command.ts:132](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L132)

___

### slashCommand

• **slashCommand**: `boolean` = `false`

#### Defined in

[types/Command.ts:146](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L146)

___

### type

• **type**: `string` = `CommandType.prefix`

**`Name`**

type

**`Description`**

The type of the command. This is used to determine how the command should be executed.

**`Default`**

CommandType.prefix

**`Example`**

```ts
export class PingCommand extends Command {
 type = CommandType.slash;
}
```

**`Example`**

```ts
export class PingCommand extends Command {
 type = CommandType.any;
}
```

**`Example`**

```ts
export class PingCommand extends Command {
 type = CommandType.separated;
}
```

**`See`**

[CommandType](../modules.md#commandtype)

#### Defined in

[types/Command.ts:205](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L205)

___

### userPermissions

• **userPermissions**: `bigint`[] = `[]`

**`Name`**

userPermissions

**`Description`**

Array of [https://discord.js.org/#/docs/main/stable/class/Permissions](https://discord.js.org/#/docs/main/stable/class/Permissions) of each permission the user needs to execute the command.

**`Default`**

[]

**`Example`**

```ts
export class ClearCommand extends Command {
 userPermissions = [Permissions.FLAGS.MANAGE_MESSAGES];
}
```

**`See`**

[https://discord.js.org/#/docs/main/stable/class/Permissions](https://discord.js.org/#/docs/main/stable/class/Permissions)

#### Defined in

[types/Command.ts:79](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L79)

## Methods

### execute

▸ `Abstract` **execute**(`«destructured»`): `void`

**`Name`**

execute

**`Description`**

The function that is executed when the command is called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CommandParameters`](../interfaces/CommandParameters.md) |

#### Returns

`void`

#### Defined in

[types/Command.ts:218](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L218)

___

### executePrefixCommand

▸ **executePrefixCommand**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CommandParameters`](../interfaces/CommandParameters.md) |

#### Returns

`void`

#### Defined in

[types/Command.ts:226](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L226)

___

### executeSlashCommand

▸ **executeSlashCommand**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CommandParameters`](../interfaces/CommandParameters.md) |

#### Returns

`void`

#### Defined in

[types/Command.ts:237](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L237)

___

### selectMenu

▸ `Abstract` **selectMenu**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SelectMenuParameters`](../interfaces/SelectMenuParameters.md) |

#### Returns

`void`

#### Defined in

[types/Command.ts:248](https://github.com/ZumitoTeam/zumito-framework/blob/3f6ac2b/src/types/Command.ts#L248)
