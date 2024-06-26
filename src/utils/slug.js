export const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/--+/g, "-");
}