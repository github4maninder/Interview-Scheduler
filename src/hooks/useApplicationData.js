import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  // -- state object
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // -- makes HTTP request; updating the state object starting at lowest level
  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState({ ...state, appointments });
    });
  }

  // -- makes HTTP request; updates local state
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({ ...state, appointments });
    });
  }

  // -- used to set the current day
  const setDay = (day) => setState({ ...state, day });
  // -- effect method
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
      console.log(all);
    });
  }, []);
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
