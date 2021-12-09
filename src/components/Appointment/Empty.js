import React from "react";

export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        className="appointment_add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
}
