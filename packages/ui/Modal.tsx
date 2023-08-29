"use client";
import { useEffect } from "react";

const Modal = ({ children, closeModal }: any) => {
  useEffect(() => {
    // Add event listener to close modal when user clicks outside of it
    const handleClickOutside = (event: any) => {
      if (event.target.closest(".modal")) return;
      closeModal();
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="modal bg-white p-8 w-1/4 rounded shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
