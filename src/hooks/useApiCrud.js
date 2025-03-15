import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function useApiCrud() {
  const [newSupplier, setNewSupplier] = useState([]);

  // Cargar datos de localStorage al montar el hook
  useEffect(() => {
    const storedSuppliers = localStorage.getItem("Suppliers");
    if (storedSuppliers) {
      setNewSupplier(JSON.parse(storedSuppliers));
    }
  }, []);

  const addSuppliers = (refs) => {
    if (!refs) return;

    const supplier = {
      id: Date.now(),
      empresa: refs.empresaRef.current.value,
      contacto: refs.contactoRef.current.value,
      telefono: refs.numeroRef.current.value,
      email: refs.emailRef.current.value,
    };

    const updatedSuppliers = [...newSupplier, supplier];

    setNewSupplier(updatedSuppliers);
    localStorage.setItem("Suppliers", JSON.stringify(updatedSuppliers));
    Swal.fire({
      text: 'Datos guardados con exito',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  };

  const deleteSupplier = (id) => {
    const updatedSuppliers = newSupplier.filter(supplier => supplier.id !== id);
    setNewSupplier(updatedSuppliers);
    localStorage.setItem("Suppliers", JSON.stringify(updatedSuppliers));
  };

  const getSuppliers = () => {
    return newSupplier;
  };

  const updateSupplier = (id, updatedData) => {
    const updatedSuppliers = newSupplier.map(supplier =>
      supplier.id === id ? { ...supplier, ...updatedData } : supplier
    );

    setNewSupplier(updatedSuppliers);
    localStorage.setItem("Suppliers", JSON.stringify(updatedSuppliers));
    Swal.fire({
      text: 'Datos guardados con exito',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  };

  return {
    addSuppliers,
    updateSupplier,
    deleteSupplier,
    getSuppliers,
  };
}

export default useApiCrud;
