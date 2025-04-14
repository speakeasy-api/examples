import { API } from "../index.js";

const API = new API({
    apiKey: "ck-2gvExpiYMnzP9vjQDgpj5xUSZsjrEZDbYy6oTohuZauN",
    tenant: "37c73264-5026-4a5a-a3f8-3825e57600bf",
    databaseName: "mydb",
    debugLogger: console,
});

async function run() {
    const result = await API.collections.embed(["Hello, world!"]);

    // Handle the result
console.log(result);
}

run();      