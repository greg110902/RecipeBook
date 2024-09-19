import React from "react";

export default function IngredientTable({data}) {
        const [state, setState] = React.useState(data);

        return (
          <table className="table">
            <tr key={"header"}>
              {Object.keys(state[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
            {state.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </table>
        );
      }