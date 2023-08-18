let currentUser = null;
let workStarted = null;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    login();
});

function login() {
    currentUser = document.getElementById("username").value;

    if (currentUser) {
        document.getElementById("loginForm").style.display = 'none';
        document.getElementById("workArea").style.display = 'flex';
        document.getElementById("welcomeUser").textContent = currentUser;
    }
}

function startWork() {
    if (!workStarted) {
        workStarted = new Date();
        const logMessage = `<div class="log-message start">Work started at ${workStarted.toLocaleTimeString()}</div>`;
        document.getElementById("logs").innerHTML += logMessage;
    }
}

function pauseWork() {
    if (workStarted) {
        let pausedTime = new Date();
        const logMessage = `<div class="log-message">Work paused at ${pausedTime.toLocaleTimeString()}</div>`;
        document.getElementById("logs").innerHTML += logMessage;
    }
}

function stopWork() {
    if (workStarted) {
        let stoppedTime = new Date();
        let workedMinutes = Math.floor((stoppedTime - workStarted) / 60000);
        const logMessage = `<div class="log-message stop">Work stopped at ${stoppedTime.toLocaleTimeString()} (Total worked: ${workedMinutes} minutes)</div>`;
        document.getElementById("logs").innerHTML += logMessage;
        workStarted = null;  // Reset the work start time
    }
}


