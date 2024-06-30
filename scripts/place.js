document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate wind chill
    function calculateWindChill(temperature, windSpeed, unit) {
        if (unit === 'metric' && temperature <= 10 && windSpeed > 4.8) {
            return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
        } else if (unit === 'imperial' && temperature <= 50 && windSpeed > 3) {
            return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
        } else {
            return 'N/A';
        }
    }

    // Example static values for temperature and wind speed
    var temperature = 25; // Example temperature in Celsius
    var windSpeed = 10; // Example wind speed in km/h
    var unit = 'metric'; // Example unit (metric or imperial)

    // Calculate wind chill and display
    var windChill = calculateWindChill(temperature, windSpeed, unit);
    document.querySelector('.wind-chill').textContent = windChill;

    // Display current year in footer
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Display last modified date in footer
    var lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
});
