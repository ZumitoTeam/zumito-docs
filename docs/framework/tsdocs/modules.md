---
id: "modules"
title: "zumito-framework"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [ApiResponse](classes/ApiResponse.md)
- [ButtonPressed](classes/ButtonPressed.md)
- [Command](classes/Command.md)
- [CommandArguments](classes/CommandArguments.md)
- [EmojiFallback](classes/EmojiFallback.md)
- [FrameworkEvent](classes/FrameworkEvent.md)
- [Module](classes/Module.md)
- [TextFormatter](classes/TextFormatter.md)
- [Translation](classes/Translation.md)
- [TranslationManager](classes/TranslationManager.md)
- [ZumitoFramework](classes/ZumitoFramework.md)

## Interfaces

- [ButtonPressedParams](interfaces/ButtonPressedParams.md)
- [CommandArgDefinition](interfaces/CommandArgDefinition.md)
- [CommandChoiceDefinition](interfaces/CommandChoiceDefinition.md)
- [CommandParameters](interfaces/CommandParameters.md)
- [FrameworkSettings](interfaces/FrameworkSettings.md)
- [SelectMenuParameters](interfaces/SelectMenuParameters.md)

## Variables

### CommandType

• `Const` **CommandType**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `any` | `string` | The command is executed when the prefix or slash is used. Running always `execute` method. |
| `prefix` | `string` | The command is executed when the prefix is used. Running `executePrefixCommand` method or `execute` method as fallback. |
| `separated` | `string` | The command is executed when the prefix or slash is used. Running `executeSlashCommand` or `executePrefixCommand` method respectively or `execute` method as fallback. |
| `slash` | `string` | The command is executed when the slash is used. Running `executeSlashCommand` method or `execute` method as fallback. |

#### Defined in

[types/CommandType.ts:1](https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/CommandType.ts#L1)
