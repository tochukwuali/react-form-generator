import { useCallback } from "react";
import FormGenerator from "../../components/FormGenerator/formGenerator";
import form from "../../helpers/form";
import formFieldTypes from "../../helpers/formFieldTypes";
import './form_page.css'

// We have omitted the header and buttons from the data structure. You may choose how this bit fit into the datastructure

const FormPage = () => {
  const handleSubmission = useCallback(formFields => {
    // Logic to handle submission of form fields
    console.log(formFields)
  }, []);

  return (
    <div className="form__wrapper">
      <h1>{form.get(formFieldTypes.header)}</h1>
      <FormGenerator form={form} submit={handleSubmission} />
    </div>
  );
};

export default FormPage;
