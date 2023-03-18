---
id: "DatabaseModel"
title: "Class: DatabaseModel"
sidebar_label: "DatabaseModel"
sidebar_position: 0
custom_edit_url: null
---

**`Name`**

DatabaseModel

**`Description`**

Base class for all database models.

**`See`**

[https://docs.zumito.ga/docs/custom/create-database-model](https://docs.zumito.ga/docs/custom/create-database-model)

## Constructors

### constructor

• **new DatabaseModel**(`framework`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `framework` | [`ZumitoFramework`](ZumitoFramework.md) |

#### Defined in

[types/DatabaseModel.ts:16](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/DatabaseModel.ts#L16)

## Properties

### framework

• **framework**: [`ZumitoFramework`](ZumitoFramework.md)

#### Defined in

[types/DatabaseModel.ts:14](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/DatabaseModel.ts#L14)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[types/DatabaseModel.ts:10](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/DatabaseModel.ts#L10)

## Methods

### define

▸ `Abstract` **define**(`model`, `models`): `void`

**`Name`**

define

**`Description`**

This method is called after all models are loaded. Here you can define relationships, validations, hooks, methods, etc.

**`Example`**

Example of defining a relationship:
```ts
define(model, models) {
 model.hasMany(models.SocialMediaUrl, {as: 'socialMediaUrl', foreignKey: 'userId'});
}
```

**`Example`**

Example of defining a validation:
```ts
define(model) {
 model.validatesPresenceOf('name', 'email')
 model.validatesUniquenessOf('email', {message: 'email is not unique'});
 model.validatesInclusionOf('gender', {in: ['male', 'female']});
 model.validatesNumericalityOf('age', {int: true});
```

**`Example`**

Example of defining a hook:
```ts
define(model) {
 model.afterUpdate = function (next) {
     this.updated = new Date();
     this.save();
     next();
 };
```

**`Example`**

Example of defining a method:
```ts
define(model) {
model.prototype.getNameAndAge = function () {
    return this.name + ', ' + this.age;
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `model` | `any` | The model that was returned by the [getModel](DatabaseModel.md#getmodel) method. |
| `models` | `any` | - |

#### Returns

`void`

#### Defined in

[types/DatabaseModel.ts:79](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/DatabaseModel.ts#L79)

___

### getModel

▸ `Abstract` **getModel**(`schema`): `any`

**`Name`**

getModel

**`Description`**

This method should return the model that will be used by the framework.

**`Example`**

```ts
getModel(schema) {
 return {
     name:   { type: schema.String, required: true },
     age:    { type: schema.Number, required: true },
     email:  { type: schema.String,  limit: 155, unique: true },
     approved:   { type: schema.Boolean, default: false, index: true }
     joinedAt:   { type: schema.Date,    default: Date.now },
};
```

**`See`**

[https://docs.zumito.ga/docs/custom/create-database-model#model](https://docs.zumito.ga/docs/custom/create-database-model#model)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `any` |

#### Returns

`any`

#### Defined in

[types/DatabaseModel.ts:37](https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/DatabaseModel.ts#L37)
