---
sidebar_position: 1
title: Introduction
description: What is a module, what can it do, and how to create one.
---

# What is a module?

A module is a set of commands, events, database models, translations and other things that extend the functionality of Zumito.

# Example use case

An example module could be a moderation module, wich contains things like:
 - commands:
    - ban
    - kick
    - mute
    - warn
- events:
    - messageDelete: When a message is deleted, it will be logged in the database.
    - messageUpdate: When a message is updated, it will be logged in the database.
- database models:
    - Warn: A model to store the warns of a user.
    - Mute: A model to store the mutes of a user.
- translations:
    - Texts used in the commands.

# How to create a module

To create a module, you just need to create a folder in the `src/modules` folder.

The name of the folder will be the name of the module.

The framework will automatically load the module when it starts.

The module by default will load commands, events, database models and translations from their respective folders.

you can modify this behavior by creating a `index.ts` file in the module folder extending the Module class.

