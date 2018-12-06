export default function get() {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  Array.from(params.entries()).forEach(([key, value]) => {
    result[key] = value;
  });
  return result;
}
