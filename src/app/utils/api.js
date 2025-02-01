// utils/api.js

import {
    fetchMailers as fetchMailersAPI,
    fetchLists as fetchListsAPI,
    createMailing as createMailingAPI,
    fetchMailings as fetchMailingsAPI,
    updateMailing as updateMailingAPI,
    deleteMailing as deleteMailingAPI,
} from "@/app/lib/mockAPI";

export const fetchMailers = async (setMailers) => {
    const mailers = await fetchMailersAPI();
    setMailers(mailers);
};

export const fetchLists = async (setLists) => {
    const lists = await fetchListsAPI();
    setLists(lists);
};

export const fetchMailings = async (setMailings) => {
    const mailings = await fetchMailingsAPI();
    setMailings(mailings);
};

export const createMailing = async (data, setMailings, mailings) => {
    const newMailing = await createMailingAPI(data);
    setMailings([...mailings, newMailing]);
};

export const updateMailing = async (id, data, setMailings, mailings) => {
    const updatedMailing = await updateMailingAPI(id, data);
    setMailings(
        mailings.map((mailing) => (mailing.id === id ? updatedMailing : mailing))
    );
};

export const deleteMailing = async (id, setMailings, mailings) => {
    await deleteMailingAPI(id);
    setMailings(mailings.filter((mailing) => mailing.id !== id));
};
