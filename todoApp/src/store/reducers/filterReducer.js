export const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case "ALL":
      return "all";
    case "COMPLETED":
      return "completed";
    case "ACTIVE":
      return "active";
    default:
      return state;
  }
};
