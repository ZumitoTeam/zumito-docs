---
editUrl: false
next: false
prev: false
title: "TextFormatter"
---

## Constructors

### new TextFormatter()

> **new TextFormatter**(): [`TextFormatter`](/api/classes/textformatter/)

#### Returns

[`TextFormatter`](/api/classes/textformatter/)

## Methods

### getBlockQuote()

> `static` **getBlockQuote**(`text`): `string`

#### Parameters

• **text**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:75](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L75)

***

### getBold()

> `static` **getBold**(`text`): `string`

#### Parameters

• **text**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:51](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L51)

***

### getChannel()

> `static` **getChannel**(`channelId`): `string`

#### Parameters

• **channelId**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:6](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L6)

***

### getCodeBlock()

> `static` **getCodeBlock**(`code`, `language`): `string`

#### Parameters

• **code**: `string`

• **language**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:41](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L41)

***

### getEmoji()

> `static` **getEmoji**(`emojiId`): `string`

#### Parameters

• **emojiId**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:14](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L14)

***

### getEmojiAnimated()

> `static` **getEmojiAnimated**(`emojiId`): `string`

#### Parameters

• **emojiId**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:18](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L18)

***

### getHyperlink()

> `static` **getHyperlink**(`text`, `url`): `string`

#### Parameters

• **text**: `string`

• **url**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:79](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L79)

***

### getHyperlinkWithImage()

> `static` **getHyperlinkWithImage**(`text`, `url`, `imageUrl`): `string`

#### Parameters

• **text**: `string`

• **url**: `string`

• **imageUrl**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:100](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L100)

***

### getHyperlinkWithTooltip()

> `static` **getHyperlinkWithTooltip**(`text`, `url`, `tooltip`): `string`

#### Parameters

• **text**: `string`

• **url**: `string`

• **tooltip**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:83](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L83)

***

### getHyperlinkWithTooltipAndImage()

> `static` **getHyperlinkWithTooltipAndImage**(`text`, `url`, `tooltip`, `imageUrl`): `string`

#### Parameters

• **text**: `string`

• **url**: `string`

• **tooltip**: `string`

• **imageUrl**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:91](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L91)

***

### getInlineCodeBlock()

> `static` **getInlineCodeBlock**(`code`): `string`

#### Parameters

• **code**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:47](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L47)

***

### getItalic()

> `static` **getItalic**(`text`): `string`

#### Parameters

• **text**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:55](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L55)

***

### getMember()

> `static` **getMember**(`memberId`): `string`

#### Parameters

• **memberId**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:22](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L22)

***

### getProgressbar()

> `static` **getProgressbar**(`progress`, `max`, `length`, `filled`, `empty`): `string`

#### Parameters

• **progress**: `number`

• **max**: `number`

• **length**: `number`

• **filled**: `string`

• **empty**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:108](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L108)

***

### getProgressbarWithText()

> `static` **getProgressbarWithText**(`progress`, `max`, `length`, `filled`, `empty`, `text`): `string`

#### Parameters

• **progress**: `number`

• **max**: `number`

• **length**: `number`

• **filled**: `string`

• **empty**: `string`

• **text**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:121](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L121)

***

### getQuote()

> `static` **getQuote**(`text`): `string`

#### Parameters

• **text**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:71](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L71)

***

### getRole()

> `static` **getRole**(`roleId`): `string`

#### Parameters

• **roleId**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:10](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L10)

***

### getSpoiler()

> `static` **getSpoiler**(`text`): `string`

#### Parameters

• **text**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:67](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L67)

***

### getStrikethrough()

> `static` **getStrikethrough**(`text`): `string`

#### Parameters

• **text**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:63](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L63)

***

### getTimestamp()

> `static` **getTimestamp**(`timestamp`, `format`): `string`

#### Parameters

• **timestamp**: `number`

• **format**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:27](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L27)

***

### getTimestampFromDate()

> `static` **getTimestampFromDate**(`date`, `format`): `string`

#### Parameters

• **date**: `Date`

• **format**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:32](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L32)

***

### getTimestampFromNow()

> `static` **getTimestampFromNow**(`format`): `string`

#### Parameters

• **format**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:37](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L37)

***

### getUnderline()

> `static` **getUnderline**(`text`): `string`

#### Parameters

• **text**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:59](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L59)

***

### getUser()

> `static` **getUser**(`userId`): `string`

#### Parameters

• **userId**: `string`

#### Returns

`string`

#### Defined in

[services/TextFormatter.ts:2](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/services/TextFormatter.ts#L2)
