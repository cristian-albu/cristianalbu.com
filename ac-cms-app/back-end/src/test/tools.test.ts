import request from "supertest";
import app from "../app";
import { T_Tool } from "../../../../shared/schemas";

const tool_1: T_Tool = {
    tool_id: 1,
    title: "ReactJS",
    description: "A fullstack web framework",
    image: "https://images.com/logo.png",
    category: "front-end",
};

const tool_2: T_Tool = {
    tool_id: 2,
    title: "Postgresql",
    description: "A SQL database",
    image: "https://images.com/logo.png",
    category: "back-end",
};

jest.mock("../models/requests", () => ({
    createRow: jest.fn().mockImplementation(() => tool_1),
    deleteRow: jest.fn().mockImplementation(() => {
        message: "item deleted";
    }),
    getRow: jest.fn().mockImplementation(() => tool_1),
    getRows: jest.fn().mockImplementation(() => [tool_1, tool_2]),
    updateRow: jest.fn().mockImplementation(() => tool_1),
}));

describe("/tools route", () => {
    describe("GET /tools", () => {
        it("responds with all tools", async () => {
            const response = await request(app).get("/tools");
            expect(response.status).toBe(200);
            expect(response.body).toEqual(expect.any(Array));
            expect(response.body.length).toBe(2);
        });
    });

    describe("GET/tools:id", () => {
        it("responds with all tools", async () => {
            const response = await request(app).get("/tools/1");
            expect(response.status).toBe(200);

            console.log(response.body);
        });
    });

    describe("POST/tools", () => {
        const { tool_id, ...reqBody } = tool_1;

        it("responds with 201", async () => {
            const response = await request(app).post("/tools").send(reqBody);
            expect(response.status).toBe(201);
        });

        describe("responds with 400", () => {
            const { ...wrongDataType }: any = reqBody;
            wrongDataType.title = 1;
            const { title, ...wrongDataType2 }: any = reqBody;
            const { ...wrongDataType3 }: any = reqBody;
            wrongDataType3.extra = "extra";

            const test400 = [
                {
                    body: wrongDataType,
                    title: "responds with 400 for wrong body type",
                },
                {
                    body: wrongDataType2,
                    title: "responds with 400 for missing params",
                },
                {
                    body: wrongDataType3,
                    title: "responds with 400 for extra keys",
                },
            ];

            test400.forEach((test) => {
                it(test.title, async () => {
                    const response = await request(app)
                        .post("/tools")
                        .send(test.body);
                    expect(response.status).toBe(400);
                });
            });
        });
    });

    describe("PUT/tools:id", () => {
        it("responds with 201", async () => {
            const response = await request(app)
                .put(`/tools/${tool_1.tool_id}`)
                .send(tool_1);
            expect(response.status).toBe(201);
        });
    });

    describe("DELETE/tools:id", () => {
        it("responds with 200", async () => {
            const response = await request(app).delete(
                `/tools/${tool_1.tool_id}`
            );
            expect(response.status).toBe(200);
        });
    });
});
