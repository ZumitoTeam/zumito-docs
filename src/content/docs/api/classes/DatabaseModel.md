---
editUrl: false
next: false
prev: false
title: "DatabaseModel"
---

## Name

DatabaseModel

## Description

Base class for all database models.

## See

[https://docs.zumito.ga/docs/custom/create-database-model](https://docs.zumito.ga/docs/custom/create-database-model)

## Constructors

### new DatabaseModel()

> **new DatabaseModel**(`framework`): [`DatabaseModel`](/api/classes/databasemodel/)

#### Parameters

• **framework**: [`ZumitoFramework`](/api/classes/zumitoframework/)

#### Returns

[`DatabaseModel`](/api/classes/databasemodel/)

#### Defined in

[definitions/DatabaseModel.ts:16](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/DatabaseModel.ts#L16)

## Properties

### framework

> **framework**: [`ZumitoFramework`](/api/classes/zumitoframework/)

#### Defined in

[definitions/DatabaseModel.ts:14](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/DatabaseModel.ts#L14)

***

### name

> `readonly` **name**: `string`

#### Defined in

[definitions/DatabaseModel.ts:10](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/DatabaseModel.ts#L10)

## Methods

### define()

> `abstract` **define**(`model`, `models`): `void`

#### Parameters

• **model**: `any`

The model that was returned by the [DatabaseModel.getModel](../../../../../api/classes/databasemodel/#getmodel) method.

• **models**: `any`

#### Returns

`void`

#### Name

define

#### Description

This method is called after all models are loaded. Here you can define relationships, validations, hooks, methods, etc.

#### Examples

Example of defining a relationship:
```ts
define(model, models) {
 model.hasMany(models.SocialMediaUrl, {as: 'socialMediaUrl', foreignKey: 'userId'});
}
```

Example of defining a validation:
```ts
define(model) {
 model.validatesPresenceOf('name', 'email')
 model.validatesUniquenessOf('email', {message: 'email is not unique'});
 model.validatesInclusionOf('gender', {in: ['male', 'female']});
 model.validatesNumericalityOf('age', {int: true});
```

Example of defining a hook:
```ts
define(model) {
 model.afterUpdate = function (next) {
     this.updated = new Date();
     this.save();
     next();
 };
```

Example of defining a method:
```ts
define(model) {
model.prototype.getNameAndAge = function () {
    return this.name + ', ' + this.age;
};
```

#### Defined in

[definitions/DatabaseModel.ts:79](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/DatabaseModel.ts#L79)

***

### getModel()

> `abstract` **getModel**(`schema`): `any`

#### Parameters

• **schema**: `any`

#### Returns

`any`

#### Name

getModel

#### Description

This method should return the model that will be used by the framework.

#### Example

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

#### See

[https://docs.zumito.ga/docs/custom/create-database-model#model](https://docs.zumito.ga/docs/custom/create-database-model#model)

#### Defined in

[definitions/DatabaseModel.ts:37](https://github.com/ZumitoTeam/zumito-framework/blob/f77a1e7d4ead227692d81d4d92214a82370f6edc/src/definitions/DatabaseModel.ts#L37)
