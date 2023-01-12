---
sidebar_position: 2
title: Commands
description: What is a command, how to create one, and how to use it.
---

# What is a command?

A command is a function that is executed when a user calls it.

There are two types of commands:
- Slash commands: Commands that are executed when a user uses the slash command system of discord.
- Prefix commands: Commands that are executed when a user uses types a message that starts with the server defined prefix.

# How to create a command

To create a command, you just need to create a `.ts` file in the `src/modules/<module-name>/commands` folder.

The file should export a class that extends the Command class.

The name of the class will be the name of the command.

## Properties

Extending the Command class will give you access to the following properties that you can define in your class:
- **categories**: An array of strings that define the categories of the command.
- **aliases**: An array of strings that define the aliases of the command. (Only for prefix commands)
- **examples**: An array of strings that define the examples of the command. they will be shown in the help command. the strings shouldn't include the prefix. If the command does not have arguments, you can simply add an empty string.
- **userPermissions**: An array of permissions that define the permissions that the user needs to execute the command. They will be checked before each command execution.
- **botPermissions**: An array of permissions that define the permissions that the bot needs to execute the command. They will be checked before each command execution.
- **hidden**: A boolean that defines if the command should be hidden from the help command.
- **adminOnly**: A boolean that defines if the command should only be executed by guild admins.
- **nsfw**: A boolean that defines if the command should only be executed in a nsfw channel.
- **dm**: A boolean that defines if the command can be executed in a dm channel.
- **args**: An array of arguments that define the arguments of the command. They will be checked before each command execution.
- **type**: The type of the command.
    - ``CommandType.prefix``: The command can only be executed with the prefix. it will run the `executePrefix` method, otherwise if method does not exist, the `execute` method will be called. useful if both types of commands run the same code.
    - ``CommandType.slash``: The command can only be executed with the slash command system. it will run the `executeSlash` method, otherwise if method does not exist, the `execute` method will be called. useful if both types of commands run the same code.
    - ``CommandType.any``: The command can be executed with both the prefix and the slash command system. it will run their respective methods, otherwise if method does not exist, the `execute` method will be called. useful if both types of commands run the same code.

There are also some properties that we will add in the future.
- **cooldown**: time in seconds that the user needs to wait before executing the command again.
- **cooldownScope**: scope of the cooldown, it can be `user`, `guild` or `global`. If it is `user`, the cooldown will be applied to each user, if it is `guild`, the cooldown will be applied to each guild, and if it is `global`, the cooldown will be applied to all users.
- **premium**: if the command can only be executed by premium users.
- **premiumScope**: scope of the premium, it can be `user`, `guild` or `global`. If it is `user`, the user needs to be premium, if it is `guild`, the guild needs to be premium, and if it is `global`, the bot needs to be premium.

---

The command description will be getted from `command.{command-name}.description` translation.

### Argument definition

To define an argument, you just need to create an object with the following properties:
- **name**: the name of the argument.
- **type**: the type of the argument. it can be `string`, `number`, `boolean`, `user`, `member`, `role`, `channel` or `guild`.
- **optional**: a boolean that defines if the argument is optional.
- **choices**: an array of choices that define the choices of the argument. it can be an array of objects or function that returns array of objects with the following properties:
    - **name**: the name of the choice.
    - **value**: the value of the choice.

---
- The argument name will be getted from `command.{command-name}.argument.{argument-name}.name` translation.
- The argument description will be getted from `command.{command-name}.argument.{argument-name}.description` translation.

## Methods

Extending the Command class will give you access to the following methods that you can define in your class:
- **executePrefix**: The method that will be executed when the command is called with the prefix.
- **executeSlash**: The method that will be executed when the command is called with the slash command system.
- **execute**: The method that will be executed when the command is called if the `executePrefix` or `executeSlash` method is not defined.
- **selectMenu**: The method that will be executed when a select menu is used and their custom id starts with the command name. the method will receive `path` parameter that is an array od string extracted from spliting the custom id by `.`.


## Command boilerplate

```ts
import { Command, CommandParameters, ZumitoFramework, CommandType, SelectMenuParameters } from "zumito-framework";

export class YourCommandName extends Command {

    execute({ message, interaction, args, client, framework, guildSettings }: CommandParameters): void {
        
    }

    async selectMenu({ path, interaction, client, framework, guildSettings }: SelectMenuParameters): Promise<void> {
		
	}

}
```