import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
//import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import svelte from "@astrojs/svelte";
import fs from 'fs';

const sidebar = [
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
            { label: 'Update bot status', link: '/guides/bot-status' },
        ]
    },
    {
        label: 'Services',
        items: [
            { label: 'Prefix Resolver', link: '/guides/prefix-resolver' },
            { label: 'Translator', link: '/guides/services/translator' },
            { label: 'Invite URL generator', link: '/guides/services/invite-url-generator' },
        ]
    }
];

const plugins = [];

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