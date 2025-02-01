import React from "react";
import MailingForm from "@/app/components/MailingForm";

interface EditModalProps {
    mailers: { id: number; name: string }[];
    lists: { id: number; name: string }[];
    mailerId: number | "";
    listId: number | "";
    schedule: string;
    onClose: () => void;
    onMailerIdChange: (mailerId: number | "") => void;
    onListIdChange: (listId: number | "") => void;
    onScheduleChange: (schedule: string) => void;
    onSubmit: (data: { mailerId: number; listId: number; schedule: string }) => void;
}

const EditModal: React.FC<EditModalProps> = ({
    mailers,
    lists,
    mailerId,
    listId,
    schedule,
    onClose,
    onMailerIdChange,
    onListIdChange,
    onScheduleChange,
    onSubmit,
}) => {
    return (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.77)]">
            <div className="bg-white w-96 h-96 p-10 rounded-xl shadow-lg relative modal">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-gray-500 hover:text-black"
                >
                    ✖
                </button>
                <MailingForm
                    btnText="Edit Mail"
                    mailers={mailers}
                    lists={lists}
                    mailerId={mailerId}
                    listId={listId}
                    schedule={schedule}
                    onMailerIdChange={onMailerIdChange}
                    onListIdChange={onListIdChange}
                    onScheduleChange={onScheduleChange}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
};

export default EditModal;
