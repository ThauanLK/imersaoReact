import { useState } from 'react';

export default function useForm(defaultCategoryValues) {
  const [categoryValue, setCategoryValue] = useState(defaultCategoryValues);

  const setValue = (key, value) => {
    setCategoryValue({ ...categoryValue, [key]: value });
  };

  const onChangeHandler = (eventName) => {
    setValue(eventName.target.getAttribute('name'), eventName.target.value);
  };

  const clearForm = () => {
    setValue(defaultCategoryValues);
  };

  return {
    onChangeHandler,
    categoryValue,
    clearForm,
  };
}
