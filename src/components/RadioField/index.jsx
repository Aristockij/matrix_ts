import { Field } from "formik";
import s from "./index.module.scss";

const RadioField = (props) => {
  return (
    <label className={`${s.radio__wrap} `}>
      <Field type='radio' name={props.name} value={props.value} />
      <span className='btn btn__sm'>{props.initialName}</span>
    </label>
  );
};
export default RadioField;
