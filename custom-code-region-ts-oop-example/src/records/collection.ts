import { APICore } from "../core.js";
import { collectionsAdd } from "../funcs/collectionsAdd.js";
import { collectionsCreate } from "../funcs/collectionsCreate.js";
import { collectionsDelete } from "../funcs/collectionsDelete.js";
import { collectionsGet } from "../funcs/collectionsGet.js";
import { collectionsUpdate } from "../funcs/collectionsUpdate.js";
import { Collection as CollectionModel } from "../models/components/collection.js";
import { HashMap } from "../models/components/hashmap.js";
import { CollectionAddRequest } from "../models/operations/collectionadd.js";
import { DeleteCollectionRequest } from "../models/operations/deletecollection.js";
import { UpdateCollectionRequest } from "../models/operations/updatecollection.js";

export class Collection implements CollectionModel {
  #client: APICore;
  #data: CollectionModel;

  constructor(
      client: APICore,
      data: CollectionModel
  ) {
    this.#client = client;
    this.#data = data;
  }
  
  
  get dimension(): number | null | undefined { return this.#data.dimension; }
  get metadata(): { [k: string]: HashMap; } | null | undefined { return this.#data.metadata; }
  get configurationJson(): any { return this.#data.configurationJson; }
  get database(): string { return this.#data.database; }
  get logPosition(): number { return this.#data.logPosition; }
  get name(): string { return this.#data.name; }
  get tenant(): string { return this.#data.tenant; }
  get version(): number { return this.#data.version; }
  get collectionId(): string { return this.#data.collectionId; }


  public async add(
    input: CollectionAddRequest["addCollectionRecordsPayload"]
  ): Promise<this> {
    const result = await collectionsAdd(this.#client, {
      collectionId: this.#data.collectionId,
      databaseName: this.#data.database,
      tenant: this.#data.tenant,
      addCollectionRecordsPayload: input
    });
    if (!result.ok) {
      throw result.error;
    }

    // Ideally the updated collection is returned so we don't need to make a
    // second request below.

    const refreshResult = await collectionsGet(this.#client, {
      collectionId: this.#data.collectionId,
      databaseName: this.#data.database,
      tenantId: this.#data.tenant,
    });

    if (!refreshResult.ok) {
      throw refreshResult.error;
    }

    this.#data = refreshResult.value;

    return this;
  }

  public async update(input: UpdateCollectionRequest['updateCollectionPayload']): Promise<this> {
    console.log("Updating collection with input: ", input);
    const result = await collectionsUpdate(this.#client, {
      collectionId: this.#data.collectionId,
      databaseName: this.#data.database,
      tenantId: this.#data.tenant,
      updateCollectionPayload: input
    });

    if (!result.ok) {
      throw result.error;
    }

    // Ideally the updated collection is returned so we don't need to make a
    // second request below.

    const refreshResult = await collectionsGet(this.#client, {
      collectionId: this.#data.collectionId,
      databaseName: this.#data.database,
      tenantId: this.#data.tenant,
    });

    if (!refreshResult.ok) {
      throw refreshResult.error;
    }

    this.#data = refreshResult.value;

    return this;
  }

  public async delete(
    input: DeleteCollectionRequest
  ): Promise<DeletedCollection> {
    const result = await collectionsDelete(this.#client, input);
    if (!result.ok) {
      throw result.error;
    }

    return new DeletedCollection(this.#client, this.#data);
  }
}

export class DeletedCollection {
  #client: APICore;
  #data: CollectionModel;

  constructor(
      client: APICore,
      data: CollectionModel
  ) {
    this.#client = client;
    this.#data = data;
  }

  public async restore(): Promise<Collection> {
    const result = await collectionsCreate(this.#client, {
      tenantId: this.#data.tenant,
      databaseName: this.#data.database,
      createCollectionPayload: {
        name: this.#data.name,
        getOrCreate: true,
        configuration: JSON.parse(this.#data.configurationJson),
        metadata: this.#data.metadata
      },
    });

    if (!result.ok) {
      throw result.error;
    }

    return new Collection(this.#client, result.value);
  }
}