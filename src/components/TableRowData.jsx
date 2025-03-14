import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";

function TableRowData() {
  const toggle = "modal";
  const target = "exampleModal";

  return (
    <>
      <tbody>
        <tr>
          <td>Cadeca</td>
          <td>Wilson Flores</td>
          <td>9697-0854</td>
          <td>cadeca@cadeca.com</td>
          <td className="d-flex justify-content-evenly tableBtn btn-sm">
            <button
              className="btn btn-primary"
              data-bs-toggle={toggle}
              data-bs-target={`#${target}`}
            >
              <FontAwesomeIcon icon={faFilePen} />
            </button>
            <button className="btn btn-danger">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TableRowData;
