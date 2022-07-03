export const loadStore = () => {
  try {
    const laodedState = localStorage.getItem("state");
    if (laodedState === null) {
      return undefined;
    }
    return JSON.parse(laodedState);
  } catch (error) {
    return undefined;
  }
};

export const saveStore = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
};
