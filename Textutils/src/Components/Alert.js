import React from "react";

const Alert = (props) => {
  return (
    props.alert && (
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.msg}</strong> : {props.alert.type}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
};

export default Alert;
