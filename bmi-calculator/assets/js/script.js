document.getElementById("submit").addEventListener("click", () => {
  const cm = parseFloat(document.getElementById("cm").value);
  const kg = parseFloat(document.getElementById("kg").value);
  const result = document.getElementById("result");

  if (isNaN(cm) || isNaN(kg) || cm <= 0 || kg <= 0) {
    result.textContent = "Please enter valid height and weight.";
    result.style.color = "red";
    return;
  }

  const heightInMeters = cm / 100;
  const bmi = (kg / heightInMeters ** 2).toFixed(1);

  result.textContent = `Your BMI is ${bmi}`;
  result.style.color = "#1976d2";
});
