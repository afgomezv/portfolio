import { useState } from "react";
import { helpHttp } from "../Helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    if (Object.keys(errors).length === 0 && form.name.trim()) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/afgomezvonline@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 3000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    loading,
    errors,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
