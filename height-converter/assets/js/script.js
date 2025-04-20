document.getElementById("submit").addEventListener("click", heightConverter);

function heightConverter() {
  const feet = parseInt(document.getElementById("feet").value) || 0;
  const inches = parseInt(document.getElementById("inches").value) || 0;

  const totalInches = feet * 12 + inches;
  const cm = (totalInches * 2.54).toFixed(1);

  document.getElementById("result").innerHTML = `${cm} cm`;
}
