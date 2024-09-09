"use client";

export default function SideBarDropdown({ title, content }) {
  window.addEventListener("click", function (e) {
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
      if (!dropdown.contains(e.target)) {
        // Click was outside the dropdown, close it
        dropdown.open = false;
      }
    });
  });
  return (
    <details className="dropdown dropdown-right">
      <summary tabIndex={0} className="btn m-1">
        {title}
      </summary>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {content.map((child) => {
          return (
            <li>
              <a href={child.route}>{child.name}</a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
