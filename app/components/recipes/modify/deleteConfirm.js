import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";

export default function Dialog({ title, onClose, onOk, children }) {
  const searchParams = useSearchParams();
  const dialogRef = useRef(null);
  const showDialog = searchParams.get("showDialog");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  const dialog =
    showDialog === "y" ? (
      <dialog ref={dialogRef}>
        <div>
          <p>
            Are you sure you'd like to delete this recipe? This action cannot be
            undone.
          </p>
        </div>
      </dialog>
    ) : null;
  return dialog;
}
