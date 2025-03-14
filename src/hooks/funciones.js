const funcionesBtn = () => {
  const limpiarAddSupplier = (refs) => {
    if (!Array.isArray(refs)) return; 
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.value = "";
      }
    });
  };

  return { limpiarAddSupplier };
};

export default funcionesBtn;
