"use client";
import ConfirmDeleteRecipe from "./modify/deleteConfirm";
import Dialog from "../dialog";
import { useState } from "react";

export default function DropdownModifyRecipe() {
  const [ open, setOpen ] = useState(false);

  function close(setOpen) {
    setOpen(false);
  }

  return (
    <div>
      <details className="dropdown mx-5">
        <summary className="btn mx-5">Edit</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a>Modify recipe</a>
          </li>
          <li>
            <a onClick={setOpen(true)}>Delete recipe</a>
          </li>
        </ul>
      </details>
      <Dialog open={open} onClose={() => close()}></Dialog>
    </div>
  );
}
