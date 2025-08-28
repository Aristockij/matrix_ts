import { Field, useField } from "formik";
import MaskedInput from "react-text-mask";
import s from "./index.module.scss";
import { useState } from "react";

const InputField = (props) => {
  const [field, meta, helpers] = useField(props);

  const [showPlaceholder, setShowPlaceHolder] = useState(true);

  return (
    <>
      <div
        className={`${props.classname ? props.classname : " "} ${
          meta.error ? s.error : ""
        } ${s.form__input}`}
      >
        {props.label ? (
          <label htmlFor={props.name}> {props.label}</label>
        ) : null}

        {props.mask && (
          <Field name={field.name}>
            {({ field, value }) => (
              <MaskedInput
                {...field}
                {...props}
                placeholder={props.placeholder}
                className='textfield'
              />
            )}
          </Field>
        )}

        {props.type !== "date" && !props.mask && (
          <Field
            id={props.name}
            type={props.type == undefined ? "text" : props.type}
            name={props.name}
            placeholder={props.placeholder}
          />
        )}

        {props.type === "date" && (
          <div
            className={`${s.field__date} ${!showPlaceholder ? s.selected : ""}`}
          >
            <Field
              id={props.name}
              type={props.type}
              name={props.name}
              onBlur={() => {
                field.value == "" && setShowPlaceHolder(true);
              }}
              onClick={() => {
                setShowPlaceHolder(false);
              }}
            />
            {showPlaceholder && field.value == "" && (
              <span>{props.placeholder}</span>
            )}
          </div>
        )}

        {props.req && meta.error && (
          <div className={s.error__message}> {meta.error}</div>
        )}
      </div>
    </>
  );
};
export default InputField;
