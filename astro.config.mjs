import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.zumito.dev',
  integrations: [starlight({
    title: 'Zumito Docs',
    social: {
      github: 'https://github.com/zumitoTeam/zumito-framework'
    },
    sidebar: [{
      label: 'Guides',
      items: [{
        label: 'Quick Start',
        slug: 'guides/start'
      }, {
        label: 'Create command',
        slug: 'guides/command'
      }, {
        label: 'Listen to an event',
        slug: 'guides/event'
      }, {
        label: 'Create database model',
        slug: 'guides/model'
      }, {
        label: 'Services',
        items: [{
          label: 'Translator',
          slug: 'guides/services/translator'
        }]
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }],
    customCss: ['./src/tailwind.css']
  }), tailwind({
    applyBaseStyles: false
  }), svelte()]
});