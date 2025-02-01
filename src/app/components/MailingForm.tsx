import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface MailingFormProps {
    mailers: { id: number; name: string }[];
    lists: { id: number; name: string }[];
    mailerId: number | "";
    listId: number | "";
    schedule: string;
    onMailerIdChange: (value: number | "") => void;
    onListIdChange: (value: number | "") => void;
    onScheduleChange: (value: string) => void;
    onSubmit: (data: { mailerId: number; listId: number; schedule: string }) => void;
    btnText: string;
}

export default function MailingForm({
    mailers,
    lists,
    mailerId,
    listId,
    schedule,
    onMailerIdChange,
    onListIdChange,
    onScheduleChange,
    onSubmit,
    btnText,
}: MailingFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (mailerId === "" || listId === "" || !schedule) {
            toast("Please fill out all fields!", {
                icon: "🥸",
            });
            return;
        }
        onSubmit({ mailerId: Number(mailerId), listId: Number(listId), schedule });
    };

    const [minDateTime, setMinDateTime] = useState<string>("");

    useEffect(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        setMinDateTime(`${year}-${month}-${day}T${hours}:${minutes}`);
    }, []);

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-slate-800 flex flex-col items-center">
            <select
                value={mailerId}
                onChange={(e) => onMailerIdChange(e.target.value === "" ? "" : Number(e.target.value))}
                className="w-full max-w-96 p-2 border rounded"
            >
                <option disabled className="text-slate-200" value="">
                    Select Mailer
                </option>
                {mailers.map((mailer) => (
                    <option key={mailer.id} value={mailer.id}>
                        {mailer.name}
                    </option>
                ))}
            </select>
            <select
                value={listId}
                onChange={(e) => onListIdChange(e.target.value === "" ? "" : Number(e.target.value))}
                className="w-full max-w-96 p-2 border rounded"
            >
                <option value="" disabled className="text-slate-200">
                    Select List
                </option>
                {lists.map((list) => (
                    <option key={list.id} value={list.id}>
                        {list.name}
                    </option>
                ))}
            </select>
            <input
                type="datetime-local"
                value={schedule}
                min={minDateTime}
                onChange={(e) => onScheduleChange(e.target.value)}
                className="w-full max-w-96 p-2 border rounded"
            />
            <button type="submit" className="min-w-36 max-w-96 p-2 bg-blue-500 text-white rounded">
                {btnText}
            </button>
        </form>
    );
}
