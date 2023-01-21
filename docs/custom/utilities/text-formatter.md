---
sidebar_position: 1
title: Text Formatter
description: An utility to format text.
---

# Text Formatter

An utility to format different types of text to be printed in discord.

## Usage

To use the TextFormatter utility, you just need to import it from the `zumito-framework` package:

```ts
import { TextFormatter } from "zumito-framework";
```

Then, you can use it like this:

```ts
const formattedText = TextFormatter.getUser(userId);
```

### getUser

This function will return a user mention.

```ts
const formattedText = TextFormatter.getUser(userId);
```

where:
- `userId` - The id of the user. Example: `342276884735721473`.

### getChannel

This function will return a channel mention.

```ts
const formattedText = TextFormatter.getChannel(channelId);
```

where:
- `channelId` - The id of the channel. Example: `957847137272594442`.

### getRole

This function will return a role mention.

```ts
const formattedText = TextFormatter.getRole(roleId);
```

where:
- `roleId` - The id of the role. Example: `957847137272594442`.

### getEmoji

This function will return an emoji.

```ts
const formattedText = TextFormatter.getEmoji(emojiId);
```

where:
- `emojiId` - The id of the emoji. Example: `1234567890` extracted from `:emojiName:1234567890`.

### getEmojiAnimated

This function will return an animated emoji.

```ts
const formattedText = TextFormatter.getEmojiAnimated(emojiId);
```

where:
- `emojiId` - The id of the emoji. Example: `1234567890` extracted from `:emojiName:1234567890`.

### getMember

This function will return a member mention.

```ts
const formattedText = TextFormatter.getMember(memberId);
```

where:
- `memberId` - The id of the member. Example: `342276884735721473`.

### getTimestamp

This function will return a date hoverable in discord.

```ts
const formattedText = TextFormatter.getTimestamp(timestamp, format);
```

where:
- `timestamp` - The timestamp to format. 
- `format` - The format of the timestamp. Example: `t` or `T`.

:information_source: For more information about the format, check the [discord documentation](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles).

### getTimestampFromNow

This function will return a date hoverable in discord using now as a date.

```ts
const formattedText = TextFormatter.getTimestampFromNow(format);
```

where:
- `format` - The format of the timestamp. Example: `t` or `T`.

:information_source: For more information about the format, check the [discord documentation](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles).

### getTimestampFromDate

This function will return a date hoverable in discord using a date.

```ts
const formattedText = TextFormatter.getTimestampFromDate(date, format);
```

where:
- `date` - The date to format. Example: `new Date()`.
- `format` - The format of the timestamp. Example: `t` or `T`.

:information_source: For more information about the format, check the [discord documentation](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles).

### getInlineCodeBlock

This function will return an inline code block `like this`.

```ts
const formattedText = TextFormatter.getInlineCodeBlock(text);
```

where:
- `text` - The text to format.

### getBold

This function will return a bold text **like this**.

```ts
const formattedText = TextFormatter.getBold(text);
```

where:
- `text` - The text to format.

### getItalic

This function will return an italic text *like this*.

```ts
const formattedText = TextFormatter.getItalic(text);
```

where:
- `text` - The text to format.

### getUnderline

This function will return an underline text __like this__.

```ts
const formattedText = TextFormatter.getUnderline(text);
```

where:
- `text` - The text to format.

### getStrikethrough

This function will return a strikethrough text ~~like this~~.

```ts
const formattedText = TextFormatter.getStrikethrough(text);
```

where:
- `text` - The text to format.

### getSpoiler

This function will return a spoiler text ||like this||.

```ts
const formattedText = TextFormatter.getSpoiler(text);
```

where:
- `text` - The text to format.

### getQuote

This function will return a quote text.
    
```ts
const formattedText = TextFormatter.getQuote(text);
```

where:
- `text` - The text to format.

### getBlockQuote

This function will return a block quote text.

```ts
const formattedText = TextFormatter.getBlockQuote(text);
```

where:
- `text` - The text to format.

### getHyperlink

This function will return a hyperlink.

```ts
const formattedText = TextFormatter.getHyperlink(text, url);
```

where:
- `text` - The text to format.
- `url` - The url of the hyperlink.

:warning: Keep in mind that the url is not visible/clickable everywhere due to discord limitations.

### getHyperlinkWithTooltip

This function will return a hyperlink with a tooltip.

```ts
const formattedText = TextFormatter.getHyperlinkWithTooltip(text, url, tooltip);
```

where:
- `text` - The text to format.
- `url` - The url of the hyperlink.
- `tooltip` - The text of the tooltip.





