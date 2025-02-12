// COUNTDOWN TIMER
const eventDate = new Date("Feb 22, 2025 00:00:00").getTime();
const timerElement = document.getElementById("timer");

if (timerElement) {
    const timer = setInterval(function () {
        let now = new Date().getTime();
        let timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timerElement.innerHTML = "Event Started!";
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }, 1000);
}

// EVENT DESCRIPTIONS
const eventDescriptions = {
    event1: "🔹 Survival in Borderland - A thrilling survival challenge where you must strategize to win.",
    event2: "🔹 Ultimate Circuit - Design and build the most efficient electrical circuit.",
    event3: "🔹 Clash of Circuitry - Compete in a battle of circuit-building and problem-solving.",
    event4: "🔹 Electric Wordza - A fun electrical engineering quiz competition.",
    event5: "🔹 Paper Presentation - Present your innovative research papers on EEE topics.",
    event6: "🔹 PowerShift - Solve real-world power grid challenges using engineering skills."
};

// Ensure DOM elements exist
const eventDetailsElement = document.getElementById("event-details");
const eventTitleElement = document.getElementById("event-title");
const eventDescriptionElement = document.getElementById("event-description");

if (eventDetailsElement && eventTitleElement && eventDescriptionElement) {
    // Function to show event details popup
    function showEventDetails(eventId) {
        if (eventDescriptions[eventId]) {
            const [title, description] = eventDescriptions[eventId].split(" - ");
            eventTitleElement.innerText = title.replace("🔹 ", "");
            eventDescriptionElement.innerText = description || "No details available.";
            
            // Disable scrolling when popup is active
            document.body.style.overflow = "hidden";
            
            // Ensure the popup is centered correctly before displaying
            eventDetailsElement.style.position = "fixed";
            eventDetailsElement.style.top = "50%";
            eventDetailsElement.style.left = "50%";
            eventDetailsElement.style.transform = "translate(-50%, -50%)";
            eventDetailsElement.style.opacity = "0";
            eventDetailsElement.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";
            
            eventDetailsElement.classList.add("active");
            setTimeout(() => {
                eventDetailsElement.style.opacity = "1";
            }, 10);
        }
    }

    // Function to close the event details popup
    function closeEventDetails() {
        eventDetailsElement.style.opacity = "0";
        setTimeout(() => {
            eventDetailsElement.classList.remove("active");
            document.body.style.overflow = "auto"; // Enable scrolling when popup is closed
        }, 300);
    }

    // Close popup when clicking outside
    document.addEventListener("click", function (event) {
        if (!eventDetailsElement.contains(event.target) && !event.target.classList.contains("event-card")) {
            closeEventDetails();
        }
    });
} else {
    console.error("Event details elements not found in the DOM.");
}
