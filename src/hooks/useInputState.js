import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const reset = () => {
    setValue("");
  };

  const handleManualValueChange = (value) => {
    setValue(value);
  };

  return [value, handleChange, reset, handleManualValueChange];
};
