// Run with:
// npx tsx examples/collection-active-record.ts

import { API } from '../src/index.js';
import { Collection } from '../src/records/collection.js';
async function runExample() {

  const API = new API({
    apiKey: "test-key",
    debugLogger: console, // This can also log internal debug info from the library
    databaseName: "default_database123",
    tenantId: "default_tenant123",
  });

  // const collection = await API.collections.getOrCreate({
  //     name: "collection-v1",
  //     metadata: {
  //       "test-key": "test-value"
  //     },
  //     configuration: {}
  // });

  const collection = new Collection(API, {
    name: "collection-v1",
    metadata: {
      "test-key": "test-value"
    },
    configurationJson: {},
    collectionId: "collection-v1",
    database: "default_database123",
    logPosition: 0,
    tenant: "default_tenant123",
    version: 1
  });

  // await collection.update({
  //   newName: "collection-v2",
  // });
  
  await collection.add({
    ids: ['4', '5', '6'],
    documents: ['apple', 'oranges', 'pineapple'],
  });
  
}

runExample().catch((error) => {
  console.error("Error running example:", error);
});
