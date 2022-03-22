export const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "Your name is requiered";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Your name is not valid";
  }

  if (!form.email.trim()) {
    errors.email = "Your email is requiered";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Your email is not valid";
  }

  if (!form.message.trim()) {
    errors.message = "Your message is requiered";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "your message should not exceed 255 characters";
  }
  return errors;
};
