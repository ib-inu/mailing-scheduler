import { fetchMailers, fetchLists, createMailing } from './mockAPI.js';

async function test() {
    const mailers = await fetchMailers();
    console.log("Mailers:", mailers);

    const lists = await fetchLists();
    console.log("Lists:", lists);

    const newMailing = await createMailing({ mailerId: 1, listId: 1, schedule: "2023-10-31T12:00" });
    console.log("New Mailing:", newMailing);
}

test();