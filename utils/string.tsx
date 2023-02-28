export const capitalize = (string: string): string => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
};
