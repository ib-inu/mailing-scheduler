// ConfirmDeleteModal.tsx
import React from "react";

interface ConfirmDeleteModalProps {
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmDeleteModal = ({
    onConfirm,
    onCancel,
}: ConfirmDeleteModalProps) => {
    return (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center bg-[rgba(150,150,150,0.39)]">
            <div className="bg-white text-slate-800 w-96 p-10 rounded-xl shadow-lg modal">
                <h2 className="text-xl text-center mb-4">Confirm Deletion</h2>
                <p className="mb-6 text-center">Are you sure you want to delete this mailing?</p>
                <div className="flex justify-center mt-8">
                    <button
                        onClick={onCancel}
                        className="bg-gray-500 text-white p-2 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white p-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;
