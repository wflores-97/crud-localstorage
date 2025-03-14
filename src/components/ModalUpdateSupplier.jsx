import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import funcionesBtn from "../hooks/funciones";
import useFormatInput from "../hooks/useFormatIput";

function ModalUpdateSupplier({ modalTarget }) {
  const { inputValue, handleSetInputValue } = useFormatInput();
  const { limpiarAddSupplier } = funcionesBtn();

  const empresaRef = useRef(null);
  const contactoRef = useRef(null);
  const numeroRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <div
      className="modal fade"
      id={modalTarget}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Editar Proveedor
            </h1>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-1">
              <label htmlFor="txtEmpresa" className="form-label">
                Empresa
              </label>
              <input
                ref={empresaRef}
                type="text"
                name="txtEmpresa"
                id="txtEmpresa"
                className="form-control"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="txtContacto" className="form-label">
                Nombre de contacto
              </label>
              <input
                ref={contactoRef}
                type="text"
                name="txtContacto"
                id="txtContacto"
                className="form-control"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="txtTelefono" className="form-label">
                Teléfono
              </label>
              <input
                ref={numeroRef}
                type="text"
                name="txtTelefono"
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
              <input
                ref={emailRef}
                type="text"
                name="txtEmail"
                id="txtEmail"
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() =>
                limpiarAddSupplier([
                  empresaRef,
                  contactoRef,
                  numeroRef,
                  emailRef,
                ])
              }
            >
              Cerrar
            </button>
            <button type="button" className="btn btn-primary">
              <FontAwesomeIcon icon={faFloppyDisk} /> Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdateSupplier;
