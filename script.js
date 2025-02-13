// Countdown Timer
const countdownDate = new Date("February 22, 2025 09:00:00").getTime();

const countdownFunction = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Event Details with Rulebooks
const eventDetails = {
    "Survival in Borderland": {
        title: "Survival in Borderland: Escape the Breakout",
        description: [
            "Preliminary: Rapid-fire quiz with buzzers.",
            "Round 2: Escape Room with number and face card challenges.",
            "Visa System: Teams start with 10 minutes; time is gained or lost based on performance."
        ],
        rulebooks: ["rulebooks/ESCAPE ROOM (1) (1).pdf"]
    },
    "U(KNOW)": {
        title: "U(KNOW)",
        description: [
            "UNO Showdown: Fast-paced UNO game.",
            "Connect the Dots: Identify electrical/electronic components from images.",
            "Circuit Challenge: Solve a circuit problem using resistors."
        ],
        rulebooks: ["rulebooks/UKNOW (1) (1).pdf"]
    },
    "Clash of Circuitry": {
        title: "Clash of Circuitry",
        description: [
            "Circuit Enigma: Debug an incomplete/faulty circuit.",
            "Assembly Arena: Teams assemble circuits using earned components and negotiate for missing parts."
        ],
        rulebooks: ["rulebooks/coc.pdf"]
    },
    "Electric Wordza": {
        title: "Electric Wordza",
        description: [
            "Round 1: A bingo-style game with electrical terms.",
            "Round 2: Teams enact and guess terms with limited clues."
        ],
        rulebooks: ["rulebooks/Electric wordza  (2).pdf"]
    },
    "PowerShift (Paper Presentation)": {
        title: "PowerShift: Transforming Ideas into Reality (Paper Presentation)",
        description: [
            "AI & Automation in Electrical Systems – Smart grids, energy management, and autonomous systems using AI.",
            "Quantum & Future Computing – Quantum technologies for power system optimization.",
            "Sustainable Energy & Green Innovations – Renewable energy, wireless power transmission, and energy harvesting.",
            "Electric Vehicles & Smart Mobility – EV innovations, AI-driven traffic management, and batteryless EVs.",
            "Space Exploration & Aerospace Tech – Solar power stations, energy-efficient space systems.",
            "Smart Cities & IoT – AI-powered grids, IoT-based infrastructure for smart cities."
        ],
        rulebooks: [
            "rulebooks/paper presentation (1).pdf",
            "rulebooks/project presentation.pdf"
        ] // Two PDFs for PowerShift
    }
};

// Open Popup for Event Details
function openPopup(event) {
    const popup = document.getElementById("event-popup");
    const overlay = document.getElementById("popup-overlay");
    const title = document.getElementById("event-title");
    const description = document.getElementById("event-description");
    const rulebookButton = document.getElementById("rulebook-button");

    if (eventDetails[event]) {
        title.innerHTML = eventDetails[event].title;
        description.innerHTML = "";

        // Create an unordered list for the description
        const ul = document.createElement("ul");
        eventDetails[event].description.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });

        description.appendChild(ul);

        // Set up the rulebook download button
        if (eventDetails[event].rulebooks) {
            rulebookButton.style.display = "block"; // Show button
            rulebookButton.onclick = function () {
                downloadRulebooks(eventDetails[event].rulebooks);
            };
        } else {
            rulebookButton.style.display = "none"; // Hide if no rulebook
        }

        // Show popup and overlay
        popup.style.display = "block";
        overlay.style.display = "block";

        // Disable scrolling
        document.body.style.overflow = "hidden";
    }
}

// Function to Download Multiple Rulebooks
function downloadRulebooks(rulebooks) {
    rulebooks.forEach(pdf => {
        setTimeout(() => {
            const link = document.createElement("a");
            link.href = pdf;
            link.setAttribute("download", pdf.split("/").pop()); // Extracts filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 500); // Small delay to ensure downloads start properly
    });
}

// Close Popup
function closePopup() {
    document.getElementById("event-popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";

    // Hide Rulebook button when popup closes
    document.getElementById("rulebook-button").style.display = "none";

    // Enable scrolling again
    document.body.style.overflow = "auto";
}

// Countdown Timer Logic
const eventDate = new Date("February 22, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Ensure countdown values are updated
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        document.getElementById("countdown").innerHTML = "<h2>Event Started!</h2>";
    }
}

// Ensure the countdown updates every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Call immediately so it doesn't wait for 1 second

// Responsive Navbar Toggle
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}

// Ensure Background Video Reloads Properly
document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("bg-video");

    video.addEventListener("error", function () {
        console.log("Background video failed to load.");
    });

    video.load(); // Ensures the video reloads properly
});
