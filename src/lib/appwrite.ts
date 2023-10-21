import { Client, Account } from "appwrite";

const client = new Client();
client
    .setEndpoint('http://avanityrp.de/v1')
    .setProject('65318fa5e41700724a85')

export const account = new Account(client);
export default client;
