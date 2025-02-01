"use client";
import { useState, useEffect } from "react";
import {
  fetchMailers,
  fetchLists,
  fetchMailings,
  createMailing,
  updateMailing,
  deleteMailing,
} from "@/app/utils/api";
import { getMailerNameById, getListNameById } from "@/app/utils/helpers";
import MailingForm from "@/app/components/MailingForm";
import EditModal from "@/app/components/EditModal";
import ViewModal from "@/app/components/ViewModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import toast from "react-hot-toast";
import ScheduledItem from "./components/ScheduledItem";
import SpinnerMini from "./components/SpinnerMini";

interface Mailer {
  id: number;
  name: string;
}

interface List {
  id: number;
  name: string;
}

interface Mailing {
  id: number;
  mailerId: number;
  listId: number;
  schedule: string;
}

export default function Home() {
  const [mailers, setMailers] = useState<Mailer[]>([]);
  const [lists, setLists] = useState<List[]>([]);
  const [mailings, setMailings] = useState<Mailing[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const [mailerId, setMailerId] = useState<number | "">("");
  const [listId, setListId] = useState<number | "">("");
  const [schedule, setSchedule] = useState("");

  const [editMailerId, setEditMailerId] = useState<number | "">("");
  const [editListId, setEditListId] = useState<number | "">("");
  const [editSchedule, setEditSchedule] = useState("");

  const [viewMailerId, setViewMailerId] = useState<number | "">("");
  const [viewListId, setViewListId] = useState<number | "">("");
  const [viewSchedule, setViewSchedule] = useState("");

  const [editingMailingId, setEditingMailingId] = useState<number | null>(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingMailingId, setDeletingMailingId] = useState<number | null>(null);

  const [loadSpinner, setLoadSpinner] = useState<boolean>(true);

  useEffect(() => {
    fetchMailers(setMailers);
    fetchLists(setLists);
    fetchMailings(setMailings);
    setLoadSpinner(false);
  }, []);

  const handleCreateOrUpdateMailing = async (data: { mailerId: number; listId: number; schedule: string }) => {
    if (editingMailingId) {
      await updateMailing(editingMailingId, data, setMailings, mailings);
      setEditingMailingId(null);
      setEditMailerId("");
      setEditListId("");
      setEditSchedule("");
      setIsEditModalOpen(false)
      toast.success("Mailing updated successfully!");
    } else {
      await createMailing(data, setMailings, mailings);
      setMailerId("");
      setListId("");
      setSchedule("");
      toast.success("Mailing added successfully!");
    }

  };

  const handleEdit = (id: number) => {
    const mailingToEdit = mailings.find((mailing) => mailing.id === id);
    if (mailingToEdit) {
      setIsEditModalOpen(true);
      setEditMailerId(mailingToEdit.mailerId);
      setEditListId(mailingToEdit.listId);
      setEditSchedule(mailingToEdit.schedule);
      setEditingMailingId(id);
    }
  };

  const handleView = (id: number) => {
    const mailingToView = mailings.find((mailing) => mailing.id === id);
    if (mailingToView) {
      setIsViewModalOpen(true);
      setViewMailerId(mailingToView.mailerId);
      setViewListId(mailingToView.listId);
      setViewSchedule(mailingToView.schedule);
    }
  };

  const handleDelete = (id: number) => {
    setDeletingMailingId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (deletingMailingId !== null) {
      await deleteMailing(deletingMailingId, setMailings, mailings);
      setIsDeleteModalOpen(false);
      setDeletingMailingId(null);
      toast.success("Mailing deleted successfully!");
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setDeletingMailingId(null);
  };

  return (
    <div className="p-8">
      {isEditModalOpen && (
        <EditModal
          mailers={mailers}
          lists={lists}
          mailerId={editMailerId}
          listId={editListId}
          schedule={editSchedule}
          onClose={() => setIsEditModalOpen(false)}
          onMailerIdChange={setEditMailerId}
          onListIdChange={setEditListId}
          onScheduleChange={setEditSchedule}
          onSubmit={handleCreateOrUpdateMailing}
        />
      )}
      {isViewModalOpen && (
        <ViewModal
          mailerName={getMailerNameById(viewMailerId, mailers)}
          listName={getListNameById(viewListId, lists)}
          schedule={viewSchedule}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}

      {isDeleteModalOpen && (
        <ConfirmDeleteModal
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}

      <h1 className="text-2xl text-center font-bold mb-4">Schedule a Mailing</h1>
      <MailingForm
        btnText="Schedule Mailing"
        mailers={mailers}
        lists={lists}
        mailerId={mailerId}
        listId={listId}
        schedule={schedule}
        onMailerIdChange={setMailerId}
        onListIdChange={setListId}
        onScheduleChange={setSchedule}
        onSubmit={handleCreateOrUpdateMailing}
      />

      <div className="w-full max-w-[900px] mx-auto">
        <h2 className="text-xl text-center font-bold mt-8 mb-7">Scheduled Mailings</h2>
        <ul className="mt-4 flex flex-wrap gap-10 items-center justify-center">
          {loadSpinner ? (
            <SpinnerMini />
          ) : (
            mailings.map((mailing, i) => (
              <ScheduledItem
                key={i}
                mailing={mailing}
                getListNameById={getListNameById}
                getMailerNameById={getMailerNameById}
                lists={lists}
                mailers={mailers}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleView={handleView}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
