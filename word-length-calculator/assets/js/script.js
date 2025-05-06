document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("wordInput");
  const output = document.getElementById("output");
  const button = document.getElementById("calculateBtn");

  const defaultMsg = "Length will appear here...";
  output.textContent = defaultMsg;
  output.classList.add("placeholder");

  const showLength = () => {
    const word = input.value.trim();
    if (word) {
      output.textContent = `Length is ${word.length}`;
      output.classList.remove("placeholder");
    } else {
      output.textContent = defaultMsg;
      output.classList.add("placeholder");
    }
  };

  button.addEventListener("click", showLength);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") showLength();
  });
});
