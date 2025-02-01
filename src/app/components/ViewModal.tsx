import React from "react";

interface ViewModalProps {
    mailerName: string;
    listName: string;
    schedule: string;
    onClose: () => void;
}

const ViewModal: React.FC<ViewModalProps> = ({
    mailerName,
    listName,
    schedule,
    onClose,
}) => {
    return (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center  bg-[rgba(0,0,0,0.77)]">
            <div className="bg-white w-96 h-96 p-10 rounded-xl shadow-lg relative modal">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-gray-500 hover:text-black"
                >
                    ✖
                </button>
                <div className="text-slate-800 flex flex-col  justify-center  h-[80%] text-left p-10 text-lg text-pretty">
                    <p className="mb-4"><strong>Mailer Name:</strong> {mailerName}</p>
                    <p className="mb-4"><strong>List Name:</strong> {listName}</p>
                    <p className="mb-4"><strong>Schedule:</strong> {schedule}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;
