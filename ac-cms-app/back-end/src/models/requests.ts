import { PoolClient } from "pg";
import pool from "../db/client";

/**
 * Fetches multiple rows from the specified table.
 * @param table The name of the table.
 * @returns A Promise that resolves with an array of fetched rows.
 * @throws If an error occurs during execution.
 */
export async function getRows<T>(table: string): Promise<T[]> {
    let client: PoolClient | undefined;

    try {
        client = await pool.connect();
        const results = await client.query(`SELECT * FROM ${table};`);
        return results.rows as T[];
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}

/**
 * Fetches a single row from the specified table based on the provided ID.
 * @param table The name of the table.
 * @param table_id The name of the ID column in the table.
 * @param id The value of the ID to fetch.
 * @returns A Promise that resolves with the fetched row.
 * @throws If an error occurs during execution.
 */
export async function getRow<T>(
    table: string,
    table_id: string,
    id: number
): Promise<T> {
    let client: PoolClient | undefined;

    try {
        client = await pool.connect();
        const results = await client.query(
            `SELECT * FROM ${table} WHERE ${table_id}=$1;`,
            [id]
        );
        return results.rows[0] as T;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}

/**
 * Inserts a new row into the specified table with the provided keys and values.
 * @param table The name of the table.
 * @param table_keys An array of column names.
 * @param values An array of corresponding values for the columns.
 * @returns A Promise that resolves with the inserted row.
 * @throws If the lengths of `table_keys` and `values` do not match, or if an error occurs during execution.
 */
export async function createRow<T>(
    table: string,
    table_keys: string[],
    values: any[]
): Promise<T> {
    let client: PoolClient | undefined;

    try {
        client = await pool.connect();

        if (table_keys.length !== values.length) {
            throw new Error("table_keys and values length must match");
        }

        const keys = table_keys.join(", ");
        let placeholder_vals = "$1";
        for (let i = 2; i < values.length; i++) {
            placeholder_vals += `,$${i}`;
        }

        const results = await client.query(
            `INSERT INTO ${table}(${keys}) VALUES(${placeholder_vals}) RETURNING *;`,
            [...values]
        );
        return results.rows[0] as T;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}

/**
 * Updates a row in the specified table based on the provided ID.
 * @param table The name of the table.
 * @param table_keys An array of column names to be updated.
 * @param values An array of corresponding values for the columns to be updated.
 * @param table_id The name of the ID column in the table.
 * @param id The value of the ID to update.
 * @returns A Promise that resolves with the updated row.
 * @throws If an error occurs during execution.
 */
export async function updateRow<T>(
    table: string,
    table_keys: string[],
    values: any[],
    table_id: string,
    id: number
): Promise<T> {
    let client: PoolClient | undefined;

    try {
        client = await pool.connect();

        if (table_keys.length !== values.length) {
            throw new Error("table_keys and values length must match");
        }

        let setVals = "";

        for (let i = 0; i < table_keys.length; i++) {
            const curr = table_keys[i];
            const queryConfig = `$${i + 1}`;

            const comma = i === table_keys.length - 1 ? "" : ", ";

            setVals += `${curr} = ${queryConfig}${comma}`;
        }

        const results = await client.query(
            `UPDATE ${table} SET ${setVals} WHERE ${table_id}=$${table_keys.length} RETURNING *;`,
            [...values, id]
        );
        return results.rows[0] as T;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}

/**
 * Deletes a row from the specified table based on the provided ID.
 * @param table The name of the table.
 * @param table_id The name of the ID column in the table.
 * @param id The value of the ID to delete.
 * @returns An object indicating the success of the deletion operation.
 * @throws If an error occurs during execution.
 */
export async function deleteRow(table: string, table_id: string, id: number) {
    let client: PoolClient | undefined;

    try {
        client = await pool.connect();
        await client.query(`DELETE FROM ${table} WHERE ${table_id}=$1`, [id]);
        return { message: `Deleted item with id: ${id} from table ${table}` };
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}
