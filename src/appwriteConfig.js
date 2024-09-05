// import { Client, Databases, Account } from "appwrite";

// export const API_ENDPOINT = "https://cloud.appwrite.io/v1";
// export const PROJECT_ID = "66d95a38003a388c24ec";
// export const DATABASE_ID = "66d95f3e0012e61ceba1";
// export const COLLECTION_ID_MESSAGES = "66d95f4c000e47b921bd";

// const client = new Client();

// client.setEndpoint(API_ENDPOINT).setProject(PROJECT_ID);

// export const account = new Account(client);
// export const databases = new Databases(client);

// export default client;

import { Client, Account, Databases } from "appwrite";

export const API_ENDPOINT = "https://cloud.appwrite.io/v1";
export const PROJECT_ID = "66d95a38003a388c24ec";
export const DATABASE_ID = "66d95f3e0012e61ceba1";
export const COLLECTION_ID_MESSAGES = "66d95f4c000e47b921bd";

const client = new Client().setEndpoint(API_ENDPOINT).setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
