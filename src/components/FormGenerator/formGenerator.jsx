import { useState } from "react";
import PropTypes from "prop-types";
import formFieldTypes from "../../helpers/formFieldTypes";
import "./form_generator.css";

const FormGenerator = ({ form, handleSubmit }) => {
  const [formFields, setFormFields] = useState({
    inputs: new Set(),
    select: {},
    radio: {}
  });
  console.log(formFields);
  return (
    <form className="form" onSubmit={handleSubmit}>
      {form.get(formFieldTypes.inputs) &&
        form.get(formFieldTypes.inputs).map((formInput, i) => (
          <div key={i} className="form__item">
            <label htmlFor={formInput.id}>{formInput.label}</label>
            <input
              // value={formFields.inputs[i] || ''}
              onChange={e => {
                let inputs = formFields.inputs;

                inputs.add(e.target.value);
                console.log(inputs);
                setFormFields(prevFormFields => {
                  return { ...prevFormFields, inputs };
                });
              }}
              className="form__input"
              id={formInput.id}
              type={(formInput.type).description}
            />
           
          </div>
        ))}

      {form.get(formFieldTypes.select) && (
        <div className="form__item">
          <label htmlFor={form.get(formFieldTypes.select).id}>
            {form.get(formFieldTypes.select).label}
          </label>
          <select
            value={formFields.select}
            onChange={({ target }) =>
              setFormFields(prevFormFields => {
                return { ...prevFormFields, select: target.value };
              })
            }
            className="form__input form__select"
            name="select"
            id={form.get(formFieldTypes.select).id}
          >
            <option value="">Select an option</option>
            {form.get(formFieldTypes.select).options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {form.get(formFieldTypes.radioGroup) && (
        <div className="form__item">
          <label htmlFor={form.get(formFieldTypes.radioGroup).id}>
            {form.get(formFieldTypes.radioGroup).label}
          </label>
          {form.get(formFieldTypes.radioGroup).options.map((option, i) => (
            <div key={i}>
              <span> {option} </span>
              <input
                value={formFields.radio}
                onClick={() =>
                  setFormFields(prevFormFields => {
                    return { ...prevFormFields, radio: option };
                  })
                }
                id={option}
                name={form.get(formFieldTypes.radioGroup)}
                type="radio"
              />{" "}
            </div>
          ))}
        </div>
      )}

      <button className="form__submit" type="submit">
        {form.get(formFieldTypes.button)}
      </button>
    </form>
  );
};

FormGenerator.propTypes = {
  form: PropTypes.instanceOf(Map).isRequired,
  handleSubmit: PropTypes.func
};

export default FormGenerator;
