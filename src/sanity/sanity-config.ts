import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas/index-schemas';
import { projectId, dataset, apiVersion } from './env-config';

export const sanityConfig = defineConfig({
  basePath: '/studio',
  name: 'aura_architects_studio',
  title: 'Aura Architects CMS',
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
