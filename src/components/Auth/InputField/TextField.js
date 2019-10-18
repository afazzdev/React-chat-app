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
  placeholder
}) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        type={type}
        name={field}
        className={className}
        onChange={onChange}
        pattern={pattern}
        title={title}
        placeholder={placeholder}
      />
      {errors && <span className="input-error">Error</span>}
      {empty && <span className="input-error">{empty}</span>}
    </div>
  );
};

export default TextField;
