import { httpPlientPlugin } from "../../src/plugins/http-client.plugin";

describe("plugins/http-client.plugin.ts", () => {

    test('httpPlientPlugin should return a string', async() => {

        const data = await httpPlientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
            });

    });

    test('httpPlientPlugin should have a POST, PUT and DELETE methods', () => {

        expect(typeof httpPlientPlugin.post).toBe('function');
        expect(typeof httpPlientPlugin.put).toBe('function');
        expect(typeof httpPlientPlugin.delete).toBe('function');

    });

});