export const getMailerNameById = (id, mailers) => {
    const mailer = mailers.find((m) => m.id === id);
    return mailer ? mailer.name : '';
};

export const getListNameById = (id, lists) => {
    const list = lists.find((l) => l.id === id);
    return list ? list.name : '';
};

export const formatDateTime = (dateTimeString) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return new Date(dateTimeString).toLocaleDateString(undefined, options);
};