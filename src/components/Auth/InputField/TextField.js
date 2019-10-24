import React from "react";

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
  hidden,
  onKeyPress,
  autoFocus,
  value
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
          autoFocus={autoFocus}
          onKeyPress={onKeyPress}
          value={value}
        />
        {onHide && (
          <button onClick={onHide} className="input-button hidden-button">
            <i className={`fas ${hidden}`}></i>
          </button>
        )}
      </div>
      {errors ? <span className="input-error">{errors}</span> : <></>}
      {empty && <span className="input-error">{empty}</span>}
    </div>
  );
};

export default TextField;
