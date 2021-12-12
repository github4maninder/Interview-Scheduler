export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find((dayOfDays) => dayOfDays.name === day);
  if (!state.days.length || !filteredDay) {
    return [];
  } else {
    return filteredDay.appointments.map((id) => state.appointments[id]);
  }
}
