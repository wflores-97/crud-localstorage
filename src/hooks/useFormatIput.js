import { useState, useRef } from "react";

function useFormatInput() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null); // Referencia al input para manejar el cursor

  const getFormattedInputValue = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 9); // Solo números, máx. 9 caracteres
    let res = "";

    if (digits.length > 0) {
      res += `${digits.slice(0, 4)}`;
    }
    if (digits.length > 4) {
      res += `-${digits.slice(4)}`;
    }

    return res;
  };

  const handleSetInputValue = (e) => {
    const { value, selectionStart } = e.target; // Guardamos la posición del cursor
    const newValue = getFormattedInputValue(value);

    // Evita re-render innecesario si el valor no cambia
    if (newValue === inputValue) return;

    setInputValue(newValue);

    // Mantiene el cursor en la posición correcta
    setTimeout(() => {
      if (inputRef.current) {
        let newCursorPos = selectionStart;

        // Ajusta el cursor si se agregó un guion (-)
        if (!inputValue.includes("-") && newValue.includes("-")) {
          newCursorPos += 1;
        }

        inputRef.current.setSelectionRange(newCursorPos, newCursorPos);
      }
    }, 0);
  };

  return {
    inputValue,
    handleSetInputValue,
    inputRef, // Retornamos la referencia
  };
}

export default useFormatInput;
