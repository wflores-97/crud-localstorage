import { useState } from "react";

function useFormatInput() {
  const [inputValue, setInputValue] = useState("");

  const getFormattedInputValue = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
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
    const { value } = e.target;
    setInputValue(getFormattedInputValue(value));
  };

  return {
    inputValue,
    handleSetInputValue,
  };
}

export default useFormatInput;
