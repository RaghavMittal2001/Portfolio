import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas/schema' // Changed from { schema }

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'i75qsxp8',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes, // Changed from just schema
  },
})