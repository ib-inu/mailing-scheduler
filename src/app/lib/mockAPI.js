export const fetchMailers = async () => {
    return [
        { id: 1, name: "Welcome Email" },
        { id: 2, name: "Promo Email" },
    ];
};

export const fetchLists = async () => {
    return [
        { id: 1, name: "Subscribers" },
        { id: 2, name: "VIP Users" },
    ];
};

export const createMailing = async (data) => {
    console.log("Mailing created:", data);
    return { id: Date.now(), ...data };
};

export const fetchMailings = async () => {
    return [
        { id: 1, mailerId: 1, listId: 1, schedule: "2025-04-31T10:00" },
        { id: 2, mailerId: 2, listId: 2, schedule: "2025-04-01T12:00" },
    ];
};

export const updateMailing = async (id, data) => {
    console.log("Mailing updated:", id, data);
    return { id, ...data };
};

export const deleteMailing = async (id) => {
    console.log("Mailing deleted:", id);
    return id;
};