import { PoolClient } from "pg";
import { sql_tables } from "../../../../shared/schemas";
import pool from "./client";

async function checkIfTableExists(name: string, client: PoolClient) {
    try {
        const table = await client.query(
            `SELECT EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = '${name}');`
        );
        return table.rows[0].exists;
    } catch (error) {
        return false;
    }
}

async function buildTable(
    table: { name: string; query: string },
    client: PoolClient
) {
    const tableExists = await checkIfTableExists(table.name, client);
    try {
        if (!tableExists) {
            await client.query(table.query);
            console.log(`Table ${table.name} was created`);
        } else {
            console.log(`Table ${table.name} already exists. Skipped`);
        }
    } catch (error) {
        throw error;
    }
}

async function buildSchema(tables: { name: string; query: string }[]) {
    let client: PoolClient | undefined;
    try {
        client = await pool.connect();

        await client.query("BEGIN");

        console.log("Client connected. Beginning transaction");

        for await (const table of tables) {
            await buildTable(table, client);
        }

        console.log("Success. Beginning commit");
        await client.query("COMMIT");
    } catch (error) {
        if (client) {
            try {
                await client.query("ROLLBACK");
                console.error(error);
            } catch (rollbackError) {
                console.error("Error rolling back transaction:", rollbackError);
            }
        }
    } finally {
        if (client) {
            console.log("Releasing client");
            client.release();
        }
    }
}

buildSchema(sql_tables);
