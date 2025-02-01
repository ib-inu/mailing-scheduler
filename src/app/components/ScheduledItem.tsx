import React from 'react';
import { formatDateTime } from '../utils/helpers';

interface ScheduledItemProps {
    mailing: {
        id: number;
        mailerId: number;
        listId: number;
        schedule: string;
    };
    getListNameById: (id: number, lists: { id: number; name: string }[]) => string;
    getMailerNameById: (id: number, mailers: { id: number; name: string }[]) => string;
    lists: { id: number; name: string }[];
    mailers: { id: number; name: string }[];
    handleEdit: (id: number) => void;
    handleView: (id: number) => void;
    handleDelete: (id: number) => void;
}

const ScheduledItem: React.FC<ScheduledItemProps> = ({
    mailing,
    getListNameById,
    getMailerNameById,
    lists,
    mailers,
    handleEdit,
    handleView,
    handleDelete,
}) => {
    return (
        <li key={mailing.id} className="max-w-96 border p-5 space-y-2 mb-2 flex flex-col justify-center items-center">
            <p>Mailer: {getMailerNameById(mailing.mailerId, mailers)}</p>
            <p>List: {getListNameById(mailing.listId, lists)}</p>
            <p>Schedule: {formatDateTime(mailing.schedule)}</p>
            <div>
                <button
                    onClick={() => handleEdit(mailing.id)}
                    className="bg-yellow-500 text-white p-2 rounded mr-2"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleView(mailing.id)}
                    className="bg-blue-500 text-white p-2 rounded mr-2"
                >
                    View
                </button>
                <button
                    onClick={() => handleDelete(mailing.id)}
                    className="bg-red-500 text-white p-2 rounded"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default ScheduledItem;
