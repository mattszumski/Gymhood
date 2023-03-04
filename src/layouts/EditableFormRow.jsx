import { FormRow } from "../components/styled/FormRow.styled";

const EditableFormRow = (props) => {
  const { name, isEdit, value, changeFunction } = props;
  return (
    <FormRow>
      <div className="form-label-text">{name}: </div>
      <div className="form-action-container">{isEdit ? <input type="text" name={name} className="form-input-field" onChange={changeFunction} value={value || ""} /> : <div className="form-field">{value}</div>}</div>
    </FormRow>
  );
};

export default EditableFormRow;
