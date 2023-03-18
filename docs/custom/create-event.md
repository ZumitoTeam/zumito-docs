---
sidebar_position: 4
title: Create event
description: A quick guide on how to create a event.
---

# Create event

Events are used to listen for events emitted by the Discord.js client. This allows you to execute code when a specific event is emitted.

To start creating an event, you just need to run the following command:

```bash
npx zumito-cli create event
```

It will ask you for the name of the event, and the module where you want to create it.

:information_source: Don't worry if you don't created the module yet, the CLI will create it for you.

After that, it will create a file in the `src/modules/<module>/events` folder with the name of the event.

The file will contain the following code:

```ts
import { FrameworkEvent, EventParameters } from 'zumito-framework';

export class EventName extends FrameworkEvent {

    once = false;

    async execute({ interaction, client, framework, }: EventParameters): Promise<void> {
        // Event code
    }

}
```

To start defining the event, you need to define the `once` property. This property defines if the event will be executed only once or every time the event is emitted.

Now, let's define an example event for the `interactionCreate` event.
First, we will define the `once` property to `false` cause we want to execute the event every time the event is emitted:

```ts
once = false;
```

Now, we need to define the `execute` function. This function will be executed every time the event is emitted.
The `execute` function receives an `EventParameters` object, which contains the following properties:
- `message` - The message that triggered the event. Only available for `messageCreate` event.
- `interaction` - The interaction that triggered the event. Only available for `interactionCreate` event.
- `client` - The Discord.js client.
- `framework` - The Zumito Framework instance.

Now, let's define the event code:

```ts
async execute({ interaction, client, framework, }: EventParameters): Promise<void> {
    interaction.reply('Hello world!');
}
```

