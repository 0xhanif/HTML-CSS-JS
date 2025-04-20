function computeLoan() {
  const amount = parseFloat(document.getElementById("amount").value);
  const interest_rate = parseFloat(
    document.getElementById("interest_rate").value
  );
  const months = parseInt(document.getElementById("months").value);

  if (isNaN(amount) || isNaN(interest_rate) || isNaN(months) || months <= 0) {
    document.getElementById("payment").innerText =
      "Please enter valid numbers.";
    return;
  }

  const monthlyInterest = (amount * (interest_rate / 100)) / months;
  const payment = (amount / months + monthlyInterest).toFixed(2);
  const formattedPayment = payment
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  document.getElementById(
    "payment"
  ).innerText = `Monthly Payment = RM ${formattedPayment}`;
}
