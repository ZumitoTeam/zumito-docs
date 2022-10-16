---
sidebar_position: 1
---

# Structure

Zumito is divided into 4 main projects:

## [zumito-framework](https://github.com/fernandomema/zumito-framework) - The core of Zumito

This is the core of Zumito, it contains the main classes and functions that Zumito uses to work.
It contains the bot structure and can load modules of our project.
Modules are the main way to extend the functionality of Zumito.
Each module can contain commands, events, database models, translations and other things.

## [zumito](https://github.com/fernandomema/zumito) - The main Zumito project

This is the main Zumito project, it contains the modules that Zumito uses to work.
It contains the main commands and events of Zumito, as well as the modules that Zumito uses to work.

If you want to create your own bot project, you can use this project as a base. However, we will soon release a boilerplate to quickly create a bot using zumito-framework.

## [zumito-web](https://github.com/fernandomema/zumito-web) - The web interface of Zumito

This is the web project of Zumito, it contains the web interface of Zumito.
It is a web application that allows you to manage your Zumito bot from the web.
It is build with [Sveltekit](https://kit.svelte.dev/) and [TailwindCSS](https://tailwindcss.com/).

## [zumito-docs](https://github.com/fernandomema/zumito-docs) - The documentation of Zumito

This is the documentation of Zumito, it contains the documentation of the framework and the main project.
It is built using Docusaurus and is hosted on Vercel.
The page you are currently reading is part of this project.
