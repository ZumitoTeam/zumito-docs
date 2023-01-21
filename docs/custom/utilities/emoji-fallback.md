---
sidebar_position: 2
title: Emoji FallBack
description: An utility to fallback to a default emoji if the bot doesn't have the specified emoji.
---

# Emoji FallBack

In order to make easier the reuse a module across multiple bots, the EmojiFallback utility will fallback to a default emoji if the bot doesn't have the specified emoji.

## Usage
### By id
To use the EmojiFallback utility, you just need to import it from the `zumito-framework` package:

```ts
import { EmojiFallback } from "zumito-framework";
```

Then, you can use it like this:

```ts
const emoji = EmojiFallback.getEmoji(client, emojiId, fallbackEmoji);
```
where:
- `client` - Discord.Client object.
- `emojiId` - The id of the emoji. Example: `1234567890` extracted from `:emojiName:1234567890`.
- `fallbackEmoji` - The fallback emoji. Example: `:clown:`. Only discord native emojis are supported.

### By name

You can also use the `getEmojiByName` function, which receives the name of the emoji instead of the id:

```ts
const emoji = EmojiFallback.getEmojiByName(client, emojiName, fallbackEmoji);
```

where:
- `client` - Discord.Client object.
- `emojiName` - The name of the emoji. Example: `emojiName` extracted from `:emojiName:1234567890`.
- `fallbackEmoji` - The fallback emoji. Example: `:clown:`. Only discord native emojis are supported.

:warning: If two or more guilds have an emoji with the same name, the emoji will be fetched from the first guild that has it. So be careful when using this method.