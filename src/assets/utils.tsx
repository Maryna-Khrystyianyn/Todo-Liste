export const getId = () => {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${(Math.random()*10).toString(36).slice(2, 10)}`;
};
