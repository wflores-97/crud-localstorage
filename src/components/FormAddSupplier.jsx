import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import useFormatInput from "../hooks/useFormatIput";
//import funcionesBtn from "../hooks/funciones";

function FormAddSupplier() {
  const { inputValue, handleSetInputValue } = useFormatInput();
  //const {limpiarAddSuplier} = funcionesBtn();

  const handleSubmit =(e)=>{
    e.preventDefault()
  }
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
                <input
                  type="text"
                  name="txtEmpresa"
                  id="txtEmpresa"
                  className="form-control"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="txtEmpresa" className="form-label">
                  Nombre de contacto
                </label>
                <input
                  type="text"
                  name="txtEmpresa"
                  id="txtEmpresa"
                  className="form-control"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="txtEmpresa" className="form-label">
                  Telefono
                </label>
                <input
                  type="text"
                  name="txtEmpresa"
                  id="txtEmpresa"
                  value={inputValue}
                  onChange={handleSetInputValue}
                  className="form-control"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="txtEmpresa" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="txtEmpresa"
                  id="txtEmpresa"
                  className="form-control"
                />
              </div>
              <div className="mt-2 opcBtn">
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faFloppyDisk} /> Guardar
                </button>
                <button className="btn btn-danger">
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
