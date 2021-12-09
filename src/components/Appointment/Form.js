import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  // Tracking the Form State and adding Default State
  // useState is a custom hook store it as a memory so when the function is run, it doesn't go away. it remembers it and re use it when you refresh a browser page.
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  //Resetting Inputs
  const reset = () => {
    setName("");
    setInterviewer(null);
  };
  const cancel = () => {
    reset();
    props.onCancel();
  };

  // empty student name and unselected interviewer should not save
  function saveError() {
    if (name === "") {
      setError("Name can't be blank.");
      return;
    }
    if (interviewer === null) {
      setError("Interviewer can't be unselected.");
      return;
    }
    props.onSave(name, interviewer);
    setError("");
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault}>
          <input
            value={name}
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setName(event.target.value)} // can be short written to {e => setName(e.target.value)
          />
        </form>

        <section className="appointment__validation">{error}</section>

        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => cancel(name)}>
            Cancel
          </Button>
          <Button confirm onClick={saveError}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
