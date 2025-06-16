import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import svelte from "@astrojs/svelte";
import fs from 'fs';
import starlightSidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown';

const plugins = [
    starlightSidebarTopicsDropdown([
        {
            label: 'Guides',
            link: '/guides/',
            icon: 'open-book',
            id: 'guides',
            items: [{
                label: 'Quick Start',
                slug: 'guides/start',
            }, {
                label: 'Create command',
                slug: 'guides/command',
            }, {
                label: 'Listen to an event',
                slug: 'guides/event',
            }, {
                label: 'Create database model',
                slug: 'guides/model',
            }, {
                label: 'Create route',
                slug: 'guides/route',
            }, {
                label: 'Update bot status',
                slug: 'guides/bot-status',
            }, {
                label: 'Services',
                items: [{
                    label: 'Translator',
                    slug: 'guides/services/translator',
                }, {
                    label: 'Invite URL generator',
                    slug: 'guides/services/invite-url-generator',
                }],
            }, {
                label: 'Other',
                items: [{
                    label: 'Env',
                    slug: 'guides/env'
                }]
            }],
        }, {
            label: 'Reference',
            link: 'https://tsdocs.dev/docs/zumito-framework/latest/modules.html',
            icon: 'information',
        }, {
            label: 'Concept (DeepWiki)',
            link: "https://deepwiki.com/ZumitoTeam/zumito-framework",
            icon: 'happenings'
        }
    ]),
];

if (fs.existsSync('../zumito-framework/')) {
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
        social: {
            github: 'https://github.com/zumitoTeam/zumito-framework',
        },
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
        plugins,
        customCss: ['./src/tailwind.css'],
    }), tailwind({
        applyBaseStyles: false,
    }), svelte()],
});
