import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
// Custom Hooks
import useFormatInput from "../hooks/useFormatIput";
import funcionesBtn from "../hooks/funciones";
import useApiCrud from "../hooks/useApiCrud";

function FormAddSupplier() {
  const { inputValue, handleSetInputValue } = useFormatInput();
  const { limpiarAddSupplier } = funcionesBtn();
  const { addSuppliers } = useApiCrud();

  const empresaRef = useRef(null);
  const contactoRef = useRef(null);
  const numeroRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    addSuppliers({
      empresaRef,
      contactoRef,
      numeroRef,
      emailRef,
    });

    limpiarAddSupplier([empresaRef, contactoRef, numeroRef, emailRef]);
  };

  return (
    <form className="text-white" onSubmit={handleSubmit}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item bg-dark">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-dark text-white collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Agregar Proveedor
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse text-white"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="mb-1">
                <label htmlFor="txtEmpresa" className="form-label">
                  Empresa
                </label>
                <input ref={empresaRef} type="text" id="txtEmpresa" className="form-control" />
              </div>
              <div className="mb-1">
                <label htmlFor="txtContacto" className="form-label">
                  Nombre de contacto
                </label>
                <input ref={contactoRef} type="text" id="txtContacto" className="form-control" />
              </div>
              <div className="mb-1">
                <label htmlFor="txtTelefono" className="form-label">
                  Teléfono
                </label>
                <input
                  ref={numeroRef}
                  type="text"
                  id="txtTelefono"
                  value={inputValue}
                  onChange={handleSetInputValue}
                  className="form-control"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="txtEmail" className="form-label">
                  Email
                </label>
                <input ref={emailRef} type="text" id="txtEmail" className="form-control" />
              </div>
              <div className="mt-2 opcBtn">
                <button className="btn btn-primary" type="submit">
                  <FontAwesomeIcon icon={faFloppyDisk} /> Guardar
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => limpiarAddSupplier([empresaRef, contactoRef, numeroRef, emailRef])}
                >
                  <FontAwesomeIcon icon={faDeleteLeft} /> Limpiar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormAddSupplier;
