// Run with:
// npx tsx examples/auto-embeddings-hook-demo.ts

import { API } from '../src/index.js';

const API = new API({
  apiKey: "test-key",
  debugLogger: console,
});

await API.collections.add({
  collectionId: "test-collection",
  databaseName: "default_database",
  tenant: "default_tenant",
  addCollectionRecordsPayload: {
    ids: ['1', '2', '3'],
    documents: ['apple', 'oranges', 'pineapple']
  },
})

