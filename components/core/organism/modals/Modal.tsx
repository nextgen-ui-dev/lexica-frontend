"use client";

import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  disabled?: boolean;
  preventClose?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  body,
  disabled,
  preventClose,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleCloseOnOutside: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if ((e.target as HTMLElement)?.id === "base-modal") {
        if (disabled) {
          return;
        }
        setShowModal(false);
        setTimeout(() => {
          onClose();
        }, 300);
      }
    },
    [setShowModal, onClose],
  );

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        id="base-modal"
        onClick={!preventClose ? handleCloseOnOutside : () => {}}
        className="flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70"
      >
        <div className="relative w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto lg:h-auto md:h-auto">
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-center p-4 rounded-t relative border-b-[1px]">
                {!preventClose && (
                  <button
                    onClick={handleClose}
                    className="p-1 border-0 hover:opacity-70 transition absolute right-6"
                  >
                    <IoMdClose size={18} />
                  </button>
                )}
                <div className="text-lg font-semibold">{title}</div>
              </div>
              <div className="relative p-6 flex-auto">{body}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
