// BOOT SEQUENCE
setTimeout(() => {
    document.getElementById("boot-screen").classList.add("hidden");
    document.getElementById("lock-screen").classList.remove("hidden");
}, 2000);

// CLOCK
function updateClock() {
    const t = new Date();
    document.getElementById("time").textContent =
        t.getHours().toString().padStart(2,"0") + ":" +
        t.getMinutes().toString().padStart(2,"0");

    document.getElementById("date").textContent =
        t.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

// UNLOCK TO START SCREEN
document.body.addEventListener("click", unlock);
document.body.addEventListener("keydown", unlock);

function unlock() {
    document.getElementById("lock-screen").classList.add("hidden");
    loadTiles();
    document.getElementById("start-screen").classList.remove("hidden");
}

// LOAD TILES
function loadTiles() {
    const container = document.getElementById("tile-container");

    tiles.forEach(t => {
        const div = document.createElement("div");
        div.className = `tile ${t.color} ${t.live?"live":""}`;
        div.textContent = t.name;
        div.onclick = () => openApp(t.app);
        container.appendChild(div);
    });
}
