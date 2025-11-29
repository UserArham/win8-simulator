function openApp(url) {
    const win = document.getElementById("app-window");
    const frame = document.getElementById("app-frame");

    win.classList.remove("hidden");
    frame.src = url;
}

function closeApp() {
    const win = document.getElementById("app-window");
    const frame = document.getElementById("app-frame");

    frame.src = "";
    win.classList.add("hidden");
}

document.getElementById("close-app").onclick = closeApp;
