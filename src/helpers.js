export const checkBudget = (estimate, rest) => {
  let clase;
  if (estimate / 4 >= rest) {
    clase = "alert alert-danger";
  } else if (estimate / 2 >= rest) {
    clase = "alert alert-warning";
  } else {
    clase = "alert alert-success";
  }
  return clase;
};
