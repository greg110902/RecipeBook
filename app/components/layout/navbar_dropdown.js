export default function NavBarDropdown({ title, content }) {
  return (
    <details className="dropdown">
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
