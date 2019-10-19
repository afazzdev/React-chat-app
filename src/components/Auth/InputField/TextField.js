import React from "react";
// import { isEmpty } from "lodash";

const TextField = ({
  label,
  type,
  field,
  onChange,
  pattern,
  title,
  errors,
  className,
  empty,
  placeholder,
  onHide,
  hidden
}) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <div>
        <input
          type={type}
          name={field}
          className={className}
          onChange={onChange}
          pattern={pattern}
          title={title}
          placeholder={placeholder}
        />
        {onHide && (
          <button onClick={onHide} className="input-button hidden-button">
            <i className={`fas ${hidden}`}></i>
          </button>
        )}
      </div>
      {errors && <span className="input-error">Error</span>}
      {empty && <span className="input-error">{empty}</span>}
    </div>
  );
};

export default TextField;
