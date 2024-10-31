export function getFormData(form) {
  const data = new FormData(form);
  const obj = {};
  for (const [key, value] of data.entries()) {
    obj[key] = value;
  }
  return obj;
}
export const BASE_URL = "https://json-api.uz/api/project/fn23";
