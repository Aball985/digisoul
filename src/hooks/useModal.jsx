import { useState } from "react";

export default function useModal() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return {
    modalIsOpen,
    openModal,
    closeModal,
    subtitle,
  };
}
