"use client";
import DeleteDialog from "../dialog";
import { useState } from "react";

export default function DropdownModifyRecipe({id}) {
  const [ open, setOpen ] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <div>
      <details className="dropdown mx-5">
        <summary className="btn mx-5">Edit</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a href={`/edit/${id}`}>Modify recipe</a>
          </li>
          <li>
            <a onClick={() => setOpen(true)}>Delete recipe</a>
          </li>
        </ul>
      </details>
      <DeleteDialog open={open} setOpen={setOpen} id={id} />
    </div>
  );
}
