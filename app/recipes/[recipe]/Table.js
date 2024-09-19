import React from "react";

export default function IngredientTable({ data }) {
  const [state, setState] = React.useState(data);

  return (
    <table className="table-auto mx-5">
      <tr key={"header"}>
        {Object.keys(state[0]).map((key) => (
          <th key={key} className="p-3">
            {key}
          </th>
        ))}
      </tr>
      {state.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td className="p-3">{val}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}
