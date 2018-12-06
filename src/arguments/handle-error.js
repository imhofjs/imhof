export default function handleError(error) {
  document.getElementById('error').innerText = error.message;
}
