import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";
import useApiCrud from "../hooks/useApiCrud";

function TableRowData() {
  const { getSuppliers } = useApiCrud();
  const [proveedores, setProveedores] = useState([]);
  const toggle = "modal";
  const target = "exampleModal";

  useEffect(() => {
    setProveedores(getSuppliers());
  }, [getSuppliers]);

  return (
    <tbody>
      {proveedores.length > 0 ? (
        proveedores.map((prov) => (
          <tr key={prov.id}>
            <td>{prov.empresa}</td>
            <td>{prov.contacto}</td>
            <td>{prov.telefono}</td>
            <td>{prov.email}</td>
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
        ))
      ) : (
        <tr>
          <td colSpan="5" className="text-center">No hay proveedores registrados.</td>
        </tr>
      )}
    </tbody>
  );
}

export default TableRowData;
