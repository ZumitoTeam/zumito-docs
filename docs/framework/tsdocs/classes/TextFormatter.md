---
id: "TextFormatter"
title: "Class: TextFormatter"
sidebar_label: "TextFormatter"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new TextFormatter**()

## Methods

### getBlockQuote

▸ `Static` **getBlockQuote**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:75](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L75)

___

### getBold

▸ `Static` **getBold**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:51](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L51)

___

### getChannel

▸ `Static` **getChannel**(`channelId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelId` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:6](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L6)

___

### getCodeBlock

▸ `Static` **getCodeBlock**(`code`, `language`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `language` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:41](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L41)

___

### getEmoji

▸ `Static` **getEmoji**(`emojiId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `emojiId` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:14](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L14)

___

### getEmojiAnimated

▸ `Static` **getEmojiAnimated**(`emojiId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `emojiId` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:18](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L18)

___

### getHyperlink

▸ `Static` **getHyperlink**(`text`, `url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:79](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L79)

___

### getHyperlinkWithImage

▸ `Static` **getHyperlinkWithImage**(`text`, `url`, `imageUrl`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `url` | `string` |
| `imageUrl` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:100](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L100)

___

### getHyperlinkWithTooltip

▸ `Static` **getHyperlinkWithTooltip**(`text`, `url`, `tooltip`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `url` | `string` |
| `tooltip` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:83](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L83)

___

### getHyperlinkWithTooltipAndImage

▸ `Static` **getHyperlinkWithTooltipAndImage**(`text`, `url`, `tooltip`, `imageUrl`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `url` | `string` |
| `tooltip` | `string` |
| `imageUrl` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:91](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L91)

___

### getInlineCodeBlock

▸ `Static` **getInlineCodeBlock**(`code`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:47](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L47)

___

### getItalic

▸ `Static` **getItalic**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:55](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L55)

___

### getMember

▸ `Static` **getMember**(`memberId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `memberId` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:22](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L22)

___

### getProgressbar

▸ `Static` **getProgressbar**(`progress`, `max`, `length`, `filled`, `empty`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progress` | `number` |
| `max` | `number` |
| `length` | `number` |
| `filled` | `string` |
| `empty` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:108](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L108)

___

### getProgressbarWithText

▸ `Static` **getProgressbarWithText**(`progress`, `max`, `length`, `filled`, `empty`, `text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progress` | `number` |
| `max` | `number` |
| `length` | `number` |
| `filled` | `string` |
| `empty` | `string` |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:121](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L121)

___

### getQuote

▸ `Static` **getQuote**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:71](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L71)

___

### getRole

▸ `Static` **getRole**(`roleId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `roleId` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:10](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L10)

___

### getSpoiler

▸ `Static` **getSpoiler**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:67](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L67)

___

### getStrikethrough

▸ `Static` **getStrikethrough**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:63](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L63)

___

### getTimestamp

▸ `Static` **getTimestamp**(`timestamp`, `format`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |
| `format` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:27](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L27)

___

### getTimestampFromDate

▸ `Static` **getTimestampFromDate**(`date`, `format`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `format` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:32](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L32)

___

### getTimestampFromNow

▸ `Static` **getTimestampFromNow**(`format`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:37](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L37)

___

### getUnderline

▸ `Static` **getUnderline**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:59](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L59)

___

### getUser

▸ `Static` **getUser**(`userId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`string`

#### Defined in

[utils/TextFormatter.ts:2](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/utils/TextFormatter.ts#L2)
