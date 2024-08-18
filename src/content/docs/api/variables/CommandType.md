---
editUrl: false
next: false
prev: false
title: "CommandType"
---

> `const` **CommandType**: `object`

## Type declaration

### any

> **any**: `string` = `'any'`

The command is executed when the prefix or slash is used. Running always `execute` method.

### prefix

> **prefix**: `string` = `'prefix'`

The command is executed when the prefix is used. Running `executePrefixCommand` method or `execute` method as fallback.

### separated

> **separated**: `string` = `'separated'`

The command is executed when the prefix or slash is used. Running `executeSlashCommand` or `executePrefixCommand` method respectively or `execute` method as fallback.

### slash

> **slash**: `string` = `'slash'`

The command is executed when the slash is used. Running `executeSlashCommand` method or `execute` method as fallback.

## Defined in

[definitions/commands/CommandType.ts:1](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/commands/CommandType.ts#L1)
