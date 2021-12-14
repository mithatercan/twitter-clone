const getFormData = (form) => {
  const formData = new FormData(form);
  const formProps = Object.fromEntries(formData);
  return formProps;
};

export default getFormData;
