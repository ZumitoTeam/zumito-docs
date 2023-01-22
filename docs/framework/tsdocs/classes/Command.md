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

[types/Command.ts:121](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L121)

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

[types/Command.ts:53](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L53)

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

[types/Command.ts:181](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L181)

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

[types/Command.ts:95](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L95)

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

[types/Command.ts:40](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L40)

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

[types/Command.ts:147](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L147)

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

[types/Command.ts:161](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L161)

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

[types/Command.ts:67](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L67)

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

[types/Command.ts:108](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L108)

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

[types/Command.ts:26](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L26)

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

[types/Command.ts:134](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L134)

___

### slashCommand

• **slashCommand**: `boolean` = `false`

#### Defined in

[types/Command.ts:148](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L148)

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

[types/Command.ts:207](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L207)

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

[types/Command.ts:81](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L81)

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

[types/Command.ts:220](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L220)

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

[types/Command.ts:228](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L228)

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

[types/Command.ts:239](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L239)

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

[types/Command.ts:250](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/Command.ts#L250)
