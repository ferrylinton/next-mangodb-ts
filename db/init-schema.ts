import 'dotenv/config';
import clientPromise from "@/db/connection";
import { createAuthoritySchema } from "@/db/schemas/authority-schema";
import { createRoleSchema } from "@/db/schemas/role-schema";
import { createUserSchema } from "@/db/schemas/user-schema";


(async () => {
    try {
        console.log('connecting to mongodb ...');
        const client = await clientPromise;

        const collections = await client.db().listCollections().toArray();
        const collectionNames = collections.map(c => c.name);

        await createAuthoritySchema(client, collectionNames);
        await createRoleSchema(client, collectionNames);
        await createUserSchema(client, collectionNames);

        console.log('close connection to mongodb ...');
        await client.close()

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})()

