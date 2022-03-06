import React, { useCallback } from 'react';

export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    if (evt.target.type === 'checkbox') {
      const { target } = evt;
      const { name, checked } = target;
      setValues({ ...values, [name]: checked });
      setErrors({ ...errors, [name]: target.validationMessage });
      setIsValid(target.closest('form').checkValidity());
    } else {
      const { target } = evt;
      const { name, value } = target;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: target.validationMessage });
      setIsValid(target.closest('form').checkValidity());
    }
  };

  const resetFrom = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values, handleChange, resetFrom, errors, isValid,
  };
}
