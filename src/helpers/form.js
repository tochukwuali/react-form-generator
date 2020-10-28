import formFieldTypes from "./formFieldTypes";

const form = new Map();

form.set(formFieldTypes.inputs, [
  {
    label: "What is the name of the officer in question?",
    type: formFieldTypes.text,
    id: "name"
  },
  {
    label: "When was the date of the incident?",
    type: formFieldTypes.date,
    id: "date"
  },
  {
    label: "How much is the bribe that was paid? (optional)",
    type: formFieldTypes.number,
    id: "bribe"
  }
]);

form.set(formFieldTypes.select, {
  label: "What is the nature of the offence?",
  id: "nature-of-offense",
  options: ["offence 1", "offence 2"]
});

form.set(formFieldTypes.radioGroup, {
  label: "Do you identify as a Nigerian ?",
  id: "identification",
  options: ["Yes", "No"]
});

form.set(formFieldTypes.header, "Police Brutality Report Form");
form.set(formFieldTypes.button, "Submit");

export default form;
