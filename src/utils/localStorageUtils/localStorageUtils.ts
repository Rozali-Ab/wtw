export const getStateFromLs = (email: string) => {
  const storedDataString = localStorage.getItem(`${email}`);
  const state = storedDataString ? JSON.parse(storedDataString) : null;

  return state;
};

export const setStateToLs = (email:string, data: string) => {
  localStorage.setItem(`${email}`, JSON.stringify(data));
};