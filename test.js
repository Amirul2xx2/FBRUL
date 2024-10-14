document.getElementById('forecastButton').addEventListener('click', function() {
  const capacity = parseFloat(document.getElementById('capacity').value);
  const cycles = parseFloat(document.getElementById('cycles').value);
  const temperature = parseFloat(document.getElementById('temperature').value);
  
  // Simple calculation for forecasting RUL
  const capacityFactor = capacity || 0;
  const cyclesFactor = cycles || 0;
  const temperatureFactor = temperature || 0;

  const rul = (capacityFactor - cyclesFactor) * 10 - temperatureFactor;
  const forecastedRUL = rul > 0 ? rul : 0; // Ensure RUL is not negative
  
  // Display the result
  document.getElementById('result').textContent = `Forecasted RUL: ${forecastedRUL} cycles`;
});
