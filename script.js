// Assuming you have a way to fetch traffic data (e.g., from a server)
const trafficData = {
    "road_a": "Heavy traffic",
    "road_b": "Normal traffic",
    "road_c": "Road closed"
};

const alertsDiv = document.getElementById("alerts");

// Function to display alerts
function displayAlerts(data) {
    alertsDiv.innerHTML = ""; // Clear previous alerts

    for (const road in data) {
        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alert");
        alertDiv.textContent = `Alert: ${road} - ${data[road]}`;
        alertsDiv.appendChild(alertDiv);
    }
}

// Initial display
displayAlerts(trafficData);

// Simulate real-time updates (replace with actual data fetching)
setInterval(() => {
    // Fetch updated traffic data
    const updatedData = { /* ... */ };
    displayAlerts(updatedData);
}, 5000); // Update every 5 seconds