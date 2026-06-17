import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
//import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import svelte from "@astrojs/svelte";
import fs from 'fs';
import starlightSkills from 'starlight-skills';

const sidebar = [
    { label: "What's New", link: '/whats-new' },
    { label: 'Quick Start', link: '/guides/start' },
    {
        label: 'Getting Started',
        items: [
            { label: 'CLI', link: '/guides/cli' },
            { label: 'Configuration', link: '/guides/zumito-config' },
            { label: 'Database', link: '/guides/database' },
            { label: 'Env', link: '/guides/env' },
        ]
    },
    {
        label: 'Guides',
        items: [
            { label: 'Create command', link: '/guides/command' },
            { label: 'Listen to an event', link: '/guides/event' },
            { label: 'Create route', link: '/guides/route' },
            {
                label: 'Bot & Lifecycle',
                items: [
                    { label: 'Update bot status', link: '/guides/bot-status' },
                    { label: 'Execution rules', link: '/guides/command-execution-rules' },
                    { label: 'Module lifecycle', link: '/guides/module-lifecycle' },
                ]
            },
        ]
    },
    {
        label: 'Services',
        items: [
            { label: 'Prefix Resolver', link: '/guides/prefix-resolver' },
            { label: 'Translator', link: '/guides/services/translator' },
            { label: 'Invite URL generator', link: '/guides/services/invite-url-generator' },
        ]
    },
    {
        label: 'Modules',
        items: [
            { label: 'Overview', link: '/guides/modules/' },
            { label: 'Admin', link: '/guides/modules/admin' },
            { label: 'BuiltByBit License', link: '/guides/modules/builtbybit-license' },
            { label: 'Canvas', link: '/guides/modules/canvas-module' },
            { label: 'DisTube (Music)', link: '/guides/modules/distube-module' },
            { label: 'Logger', link: '/guides/modules/logger' },
            { label: 'Reactions', link: '/guides/modules/reactions-module' },
            { label: 'Stickman Fight', link: '/guides/modules/stickmanfight' },
            { label: 'User Panel', link: '/guides/modules/user-panel' },
        ]
    }
];

const plugins = [starlightSkills()];

if (fs.existsSync('../zumito-framework/') && false) { // Change false to true to enable TypeDoc generation
    plugins.push(
        starlightTypeDoc({
            entryPoints: ['../zumito-framework/src/index.ts'],
            tsconfig: '../zumito-framework/tsconfig.json',
            output: 'en/api',
            typeDoc: {
                exclude: [
                    '**/node_modules/**',
                ],
            },
        }),
    );
} 

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.zumito.dev',
    integrations: [starlight({
        title: 'Zumito Docs',
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/zumitoTeam/zumito-framework' },
        ],
        defaultLocale: 'root',
        locales: {
            root: {
                label: 'English',
                lang: 'en',
            },
            es: {
                label: 'Español',
            },
        },
        sidebar,
        plugins,
        
        customCss: ['./src/tailwind.css'],
    }), tailwind({
        applyBaseStyles: false,
    }), svelte()],
});