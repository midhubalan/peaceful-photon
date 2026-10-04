// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Peaceful Photon',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/midhubalan/peaceful-photon' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Posgres Setup Guide', slug: 'guides/postgresql-local-setup' },
						{ label: 'Neo4j Setup Guide', slug: 'guides/neo4j-community-local-setup' },
						{ label: 'WSL Keyring Setup Guide', slug: 'guides/wsl-keyring-setup' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
