export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find((dayOfDays) => dayOfDays.name === day);
  if (!state.days.length || !filteredDay) {
    return [];
  } else {
    return filteredDay.appointments.map((id) => state.appointments[id]);
  }
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find((dayOfDays) => dayOfDays.name === day);
  if (!state.days.length || !filteredDay) {
    return [];
  } else {
    return filteredDay.interviewers.map((id) => state.interviewers[id]);
  }
}

export function getInterview(state, interview) {
  if (interview) {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer],
    };
  }
  return null;
}
