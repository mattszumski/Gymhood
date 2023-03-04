import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const handleToggle = (evt) => {
    setValue((prev) => !prev);
  };

  return [value, handleToggle];
};
