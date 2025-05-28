document
  .getElementById("temperatureForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const temp = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    const resultDiv = document.getElementById("result");
    const explanationDiv = document.getElementById("explanation");

    if (isNaN(temp)) {
      resultDiv.textContent = "Masukkan angka yang valid.";
      explanationDiv.textContent = "";
      return;
    }

    let converted, explanation;

    if (unit === "celsius") {
      converted = (temp * 9) / 5 + 32;
      conversionResult.textContent = "${temp}°C = ${converted.toFixed(2)}°F";
      explanation =
        "Rumus: (°C × 9/5) + 32 =(${temp}x9/5)+32=${converted.toFixed(2)}°F";
    } else {
      converted = ((temp - 32) * 5) / 9;
      resultDiv.textContent = "${temp}°F = ${converted.toFixed(2)}°C";
      explanation =
        "Rumus: (°F - 32) x 5/9 =(${temp} - 32) x 5/9 = ${converted.toFixed(2)}°C";
    }

    explanationDiv.textContent = explanation;
  });
