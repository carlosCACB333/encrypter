const keys: { [key: string]: string } = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

export const encrypt = (text: string) => {
  return text
    .split("")
    .map((char) => keys[char] || char)
    .join("");
};

export const decrypt = (text: string) => {
  Object.entries(keys).forEach(([key, value]) => {
    text = text.replaceAll(value, key);
  });
  return text;
};
