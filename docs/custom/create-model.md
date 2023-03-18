---
sidebar_position: 3
title: Create database model
description: A quick guide on how to create a database model.
---

# Create database model

Database models are used to define the structure of the data that will be stored in the database. This allows you to define the data your module will store in the database.
In each model, we define all the properties with their types, and their respective relationships with other models.

For start creating a model, you just need to run the following command:

```bash
npx zumito-cli create model
```

It will ask you for the name of the model, and the module where you want to create it.

:information_source: Don't worry if you don't created the module yet, the CLI will create it for you.

After that, it will create a file in the `src/modules/<module>/models` folder with the name of the model.
The file will contain the following code:

```ts
import { DatabaseModel } from '../../types/DatabaseModel.js';

export class Guild extends DatabaseModel {
    getModel(schema: any) {
        return {}
    }

    define(model: any, models: any): void {
        
    }
}
```

To start defining the model, you need to define the properties of the model in the `getModel` function.
The `getModel` function receives a `schema` object, which contains the available types to define the properties of the model.
- `schema.String` - Defines a string property.
- `schema.Number` - Defines a number property.
- `schema.Boolean` - Defines a boolean property.
- `schema.Date` - Defines a date property.
- `schema.Blob` - Defines a blob property.
- `schema.JSON` - Defines a JSON property.

Now, let's define an example model for an user.
First in the `getModel` function, we will define the properties of the model:

```ts
getModel(schema: any) {
    return {
        username: {
            type: schema.String,
            required: true
        },
        age: {
            type: schema.Number,
            required: true
        },
        lang: {
            type: schema.String,
            default: 'en',
        }
        isPremium: {
            type: schema.Boolean,
            required: true,
            default: false
        },
        createdAt: {
            type: schema.Date,
            required: true,
        }
    }
}
```

then, in the `define` function, we can define validations and relationships with other models.

```ts
define(model: any, models: any): void {

        // Define validations
        model.validatesUniquenessOf('username');
        model.validatesInclusionOf('lang', { in: ['en', 'es'] });

        // Define relationships
        model.hasMany(models.Guild, { as: 'guilds', foreignKey: 'ownerId' });

        // define any custom method for instance
        model.prototype.getNameAndAge = function () {
            return this.name + ', ' + this.age;
        };
    }
```

## usage

To use the model in a command, you just need to get the model from framework.database.models and use it.

```ts
import { Command, CommandParameters, ZumitoFramework, CommandType } from "zumito-framework";

export class CommandName extends Command {

    execute({ message, interaction, args, client, framework, guildSettings }: CommandParameters): void {
        let user = framework.database.models.User.findOne({ where: { username: 'JhonDoe' } }).then((err, user) => {
            user.username = 'JhonDoe2';
            user.save();
        });
    }

}
```

You can find more information about the usage in the [canario](https://www.npmjs.com/package/canario) package page.

