import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("67978caa000c15dabcf6");

export const account = new Account(client);
export const database = new Databases(client, "6797a5f50007652b3b03");