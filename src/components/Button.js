import React from "react";
//Import the scss style
import "components/Button.scss";
//Import the classnames library
import classNames from "classnames";

export default function Button(props) {
  const buttonClass = classNames("button", {
    " button--confirm": props.confirm,
    " button--danger": props.danger,
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
