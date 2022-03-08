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

      if (name === 'email' && target.validationMessage === '') {
        // eslint-disable-next-line no-useless-escape
        const isValidEmail = value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!isValidEmail) {
          setErrors({ ...errors, [name]: 'Адрес электронной почты должен содержать домен верхнего уровня' });
          setIsValid(false);
        } else {
          setErrors({ ...errors, [name]: target.validationMessage });
          setIsValid(target.closest('form').checkValidity());
        }
      } else {
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());
      }

      setValues({ ...values, [name]: value });
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
